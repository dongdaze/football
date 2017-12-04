var MongoClient = require('mongodb').MongoClient;
var db = {};
var dbSettings = {
	connectString: 'mongodb://localhost:27017'
}
var collections = {
	activity: 'activities',
	association: 'associations',
	user: 'users'
}
//获取数据库链接
function getConnection(settings, success) {
	MongoClient.connect(settings.connectString, (err, connect) => {
		success && success(err, connect);
	});
}
//增加活动
db.addActivity = (activity, success) => {
	getConnection(dbSettings, function (err, connect) {
		if (err) {
			success(err, null);
			return;
		}
		connect.collection(collections.activity).insert(activity, (err, result) => {
			success && success(err, result);
			connect.close();
		});
	});
}

//修改活动
db.updateActivity = (activity, success) => {
	getConnection(dbSettings, (err, connect) => {
		if (err) {
			success(err, null);
			return;
		}
		connect.collection(collections.activity).save(activity, null, (err, result) => {
			success && success(err, result);
			connect.close();
		});
	});
}
//查找
db.getActivity = (id, success) => {
	getConnection(dbSettings, (err, connect) => {
		connect.collection(collections.activity).findOne({ _id: id }, (err, result) => {
			success && success(err, result);
			connect.close();
		})
	})
}
//查找修改
db.getActivityUpdate = (id, success) => {
	getConnection(dbSettings, (err, connect) => {
		connect.collection(collections.activity).findOne({ _id: id }, (err, conent) => {
			conent.isAudit = true
			connect.collection(collections.activity).save(conent, null, (err, result) => {
				success && success(err, result);
				connect.close();
			});
		})
	})
}
//获取所有
db.getActivitysAll = (success) => {
	getConnection(dbSettings, (err, connect) => {
		connect.collection(collections.activity).find({ isAudit: false }).toArray(function (err, result) {
			success && success(err, result);
			connect.close();
		})
	})
}
//获取审核通过
db.getActivitys = (success) => {
	getConnection(dbSettings, (err, connect) => {
		connect.collection(collections.activity).find({ isAudit: true }).toArray(function (err, result) {
			success && success(err, result);
			connect.close();
		})
	})
}
//删除活动
db.deleteActivity = (id, success) => {
	getConnection(dbSettings, (err, connect) => {
		if (err) {
			success(err, null);
			return;
		}
		connect.collection(collections.activity).deleteOne({ _id: id }, (err, result) => {
			success && success(err, result);
			connect.close();
		});
	});
}


//增加社群
db.addAssociation = (associations, success) => {
	getConnection(dbSettings, (err, connect) => {
		if (err) {
			success(err, null);
			return;
		}
		connect.collection(collections.association).insert(associations, (err, result) => {
			if (result) {
				success && success(err, result);
				connect.close();
			}
		})
	})
}
//获取社群
db.getAssociationAll = (success) => {
	getConnection(dbSettings, (err, connect) => {
		connect.collection(collections.association).find().toArray(function (err, result) {
			success && success(err, result);
			connect.close();
		})
	})
}
//删除社群
db.deleteAssociationId = (id, success) => {
	getConnection(dbSettings, (err, connect) => {
		connect.collection(collections.association).deleteOne({ _id: id }, (err, result) => {
			success && success(err, result);
			connect.close();
		})
	})
}
//修改社群
db.updateAssociationId = (id, success) => {
	getConnection(dbSettings, (err, connect) => {
		connect.collection(collections.association).find({ _id: id }).toArray(function (err, result) {
			success && success(err, result);
			connect.close();
		})
	})
}
//修改保存社群
db.assEditSaveAssociation = (associations, success) => {
	getConnection(dbSettings, (err, connect) => {
		if (err) {
			success(err, null);
			return;
		}
		connect.collection(collections.association).findOne({ _id: associations._id }, (err, conent) => {
			conent._id = associations._id;
			conent.assName = associations.assName;
			conent.des = associations.des;
			conent.startTime = associations.startTime;
			conent.deassImgs = associations.deassImgs;
			connect.collection(collections.association).save(conent, null, (err, result) => {
				success && success(err, result);
				connect.close();
			});
		})
	})
}
//社群中的活动
db.getActivityAss = (id, success) => {
	getConnection(dbSettings, (err, connect) => {
		connect.collection(collections.activity).find({ associationIdTitle: id }).toArray(function (err, result) {
			success && success(err, result);
			connect.close();
		})
	})
}
//用户
db.addUser = (user, success) => {
	getConnection(dbSettings, (err, connect) => {
		if (err) {
			success(err, null);
			return;
		}
		connect.collection(collections.user).insert(user, (err, result) => {
			if (result) {
				success && success(err, result);
				connect.close();
			}
		})
	})
}
//获取用户
db.getUserAll = (success) => {
	getConnection(dbSettings, (err, connect) => {
		connect.collection(collections.user).find().toArray(function (err, result) {
			success && success(err, result);
			connect.close();
		})
	})
}
//删除用户
db.deleteUser = (id, success) => {
	getConnection(dbSettings, (err, connect) => {
		connect.collection(collections.user).deleteOne({ _id: id }, (err, result) => {
			success && success(err, result);
			connect.close();
		})
	})
}
module.exports = db;
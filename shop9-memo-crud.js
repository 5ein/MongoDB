db.getCollection("memo").find({})

db.memo.find({})

//조건줘서 검색하기  ==> db.memo.find({조건},{필드선택})

//1. and조건
db.memo.find({name: "Tom", office: "seoul"},{phone: 1}).count()

//2. or조건 ==> {$or : [{조건키: 값}, {조건키: 값}]} ==> {$or: [json, json, json]}
db.memo.find({$or :[{name: "Tom"}, {office: "seoul"}]},{phone: 1}).count()

//3. office가 busan인 것 중에 _id는 안나오게 하고 office, phone나오게하기
db.memo.find({office: "busan"}, {_id:0, office:1, phone:1})

//4. office가 busan이 아닌것중 3개만 가져와
db.memo.find({office: {$not: /busan/}}, {_id:0, office:1, phone:1}).limit(3)

//5. office가 Wordware인거 하나 자워라
db.memo.deleteOne({office: "Wordware"})
//검색
db.memo.find({office: "Wordware"})

//6. office가 seoul인 것의 phone을 999로 바꿔라
db.memo.updateMany({office: 'seoul'}, {$set : {phone : '999'}})
db.memo.find({office: 'seoul'}, {phone:1})

//7. 조건 안 주면 다 지워버림
db.memo.deleteMany({})

db.meno.find({}).count()

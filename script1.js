use shop10

db.memo.find({}) //전체검색

db.memo.count({}) //document count

db.memo.insertOne({
    "name" : "apple",
    "age" : 100
})

db.memo.find({}) //전체검색

db.memo.find({"name" : "apple"})

db.memo.find({"age" : 100})

db.createCollection("member")

db.meember.stats()

db.member.insert({
    "name" : "hong2",
    "age" : 100,
    "tel" : "010"
})

db.member.find({})

db.createCollection("bbs")
db.bbs.insertOne({"title" : "win"})

db.bbs.find({})
db.dropDatabase()

show databases

//crud확인문제
use shop5 //shop5 보기
show databases //전체 데이터베이스목록 보기
db.createCollection("member") //member collection 만들기
db.member.insertOne({ //하나 넣기
    "id" : "hong",
    "pw" : 1234,
    "name" : "honggildong",
    "tel" : 011
})
db.member.find({}) //member에 들어간것 확인
db.member.insertMany([
            {"id":"hong2", "pw":"1234", "name":"honggildong", "tel": "011"},
            {"id":"hong3", "pw":"1234", "name":"honggildong", "tel": "011"}
            ])
db.member.drop()
show collections
db.dropDatabase()
show dbs
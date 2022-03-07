const Mock = require('mockjs')
const Random = Mock.Random

const newlist = function () {
    let newlist = []
    for (let i = 0; i < 8; i++){
        let newobject = {
            title: Random.ctitle(),
            content: Random.cparagraph(),
            createdTime: Random.date()
        }
        newlist.push(newobject)
    }
    return newlist
}

const hashkey = function () {
    let hashkey ={
        hashkey: Random.string()
    }
    return hashkey
}

Mock.mock('/mock/mylist', newlist)
Mock.mock('/mock/login', 'post', require('./json/test.json'))
Mock.mock('/mock/verifycode', hashkey)
Mock.mock('/mock/is_code', {"verifycode": "123"})

Mock.mock('/mock/reg', 'post', function (option) {
    let $name = JSON.parse(option.body).username;
    if($name){
        return Mock.mock({
            status: 200,
            message: '提交成功！！！'
        })
    }else{
        return Mock.mock({
            status: 400,
            message: '未提交参数'
        })
    }
})

Mock.mock(RegExp('/mock/lv2' + '.*'), 'get', function(option){
    console.log(option)
    let value = JSON.parse(option.body).value;
    console.log(value)
    let options = [{value: value + '1', label: value + '1'},{value: value + '2', label: value + '2'},
                    {value: value + '3', label: value + '3'},{value: value + '4', label: value + '4'}]
    return Mock.mock({
        status: 200,
        options: options
    })
})

Mock.mock(RegExp('/mock/lv3' + '.*'), 'get', function(option){
    console.log(option)
    let value = JSON.parse(option.body).value;
    console.log(value)
    let options = [{value: value + '1', label: value + '1'},{value: value + '2', label: value + '2'},
                    {value: value + '3', label: value + '3'},{value: value + '4', label: value + '4'}]
    return Mock.mock({
        status: 200,
        options: options
    })
})

Mock.mock(RegExp('/mock/lv4' + '.*'), 'get', function(option){
    console.log(option)
    let value = JSON.parse(option.body).value;
    console.log(value)
    let options = [{value: value + '1', label: value + '1'},{value: value + '2', label: value + '2'},
                    {value: value + '3', label: value + '3'},{value: value + '4', label: value + '4'}]
    return Mock.mock({
        status: 200,
        options: options
    })
})

Mock.mock(RegExp('/mock/search' + '.*'), 'get', function(option){
    console.log(option)
    // let value = JSON.parse(option.body).value;
    console.log(option.body)
    let options = [
        {
            gene: 'ABO',
            gene1: 'ABO*A2.01',
            gene2: ['c.467C>T','c.1061delC'],
            gene3: ['p.Pro156Leu','p.Pro354Argfs*23'],
            frequency: '4.25%',
            data1: 'A2',
            data2: 'ABO*A11.01',
            data3: '123456123456123456123456',
            data4: ['1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '6\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',],
            data5: ['1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '61\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGG',],
        },
        {
            gene: 'ABO',
            gene1: 'ABO*A2.01',
            gene2: ['c.467C>T','c.1061delC'],
            gene3: ['p.Pro156Leu','p.Pro354Argfs*23'],
            frequency: '4.25%',
            data1: 'A2',
            data2: 'ABO*A11.01',
            data3: '123456123456123456123456',
            data4: ['1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '6\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',],
            data5: ['1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '61\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',
                    '1\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG\xa0\xa0\xa0\xa0ATGGCCGAGG',],
        },
    ]
    return Mock.mock({
        status: 200,
        data: options
    })
})
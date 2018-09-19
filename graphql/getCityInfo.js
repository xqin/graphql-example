
var mockdb = [
  {
    "Code": "BJS",
    "CountryID": 1,
    "ID": 11,
    "Name": "北京",
    "Name_en": "Beijing",
    "NamePinyin": "Beijing",
    "ProvinceID": 1,
    "CountryCode": "CN",
    "CountryCode_OAG": "CN",
    "CountryName": "中国",
    "CountryEname": "China",
    "FltCityName": "北京",
    "FltCityEname": "Beijing",
    "HtlCityID": 1,
    "HtlCityName": "北京",
    "HtlCityEname": "Beijing",
    "ICAOCountryCode": "CHN"
  },

  {
    "Code": "CTU",
    "CountryID": 1,
    "ID": 218,
    "Name": "成都",
    "Name_en": "Chengdu",
    "NamePinyin": "Chengdu",
    "ProvinceID": 22,
    "CountryCode": "CN",
    "CountryCode_OAG": "CN",
    "CountryName": "中国",
    "CountryEname": "China",
    "FltCityName": "成都",
    "FltCityEname": "Chengdu",
    "HtlCityID": 28,
    "HtlCityName": "成都",
    "HtlCityEname": "Chengdu",
    "ICAOCountryCode": "CHN"
  },
  {
    "Code": "SZX",
    "CountryID": 1,
    "ID": 310,
    "Name": "深圳",
    "Name_en": "Shenzhen",
    "NamePinyin": "Shenzhen",
    "ProvinceID": 23,
    "CountryCode": "CN",
    "CountryCode_OAG": "CN",
    "CountryName": "中国",
    "CountryEname": "China",
    "FltCityName": "深圳",
    "FltCityEname": "Shenzhen",
    "HtlCityID": 30,
    "HtlCityName": "深圳",
    "HtlCityEname": "Shenzhen",
    "ICAOCountryCode": "CHN"
  },
  {
    "Code": "ZUH",
    "CountryID": 1,
    "ID": 131,
    "Name": "珠海",
    "Name_en": "Zhuhai",
    "NamePinyin": "Zhuhai",
    "ProvinceID": 23,
    "CountryCode": "CN",
    "CountryCode_OAG": "CN",
    "CountryName": "中国",
    "CountryEname": "China",
    "FltCityName": "珠海",
    "FltCityEname": "Zhuhai",
    "HtlCityID": 31,
    "HtlCityName": "珠海",
    "HtlCityEname": "Zhuhai",
    "ICAOCountryCode": "CHN"
  },
  {
    "Code": "CAN",
    "CountryID": 1,
    "ID": 321,
    "Name": "广州",
    "Name_en": "Guangzhou",
    "NamePinyin": "Guangzhou",
    "ProvinceID": 23,
    "CountryCode": "CN",
    "CountryCode_OAG": "CN",
    "CountryName": "中国",
    "CountryEname": "China",
    "FltCityName": "广州",
    "FltCityEname": "Guangzhou",
    "HtlCityID": 32,
    "HtlCityName": "广州",
    "HtlCityEname": "Guangzhou",
    "ICAOCountryCode": "CHN"
  },
  {
    "Code": "SHA",
    "CountryID": 1,
    "ID": 22,
    "Name": "上海",
    "Name_en": "Shanghai",
    "NamePinyin": "Shanghai",
    "ProvinceID": 2,
    "CountryCode": "CN",
    "CountryCode_OAG": "CN",
    "CountryName": "中国",
    "CountryEname": "China",
    "FltCityName": "上海",
    "FltCityEname": "Shanghai",
    "HtlCityID": 2,
    "HtlCityName": "上海",
    "HtlCityEname": "Shanghai",
    "ICAOCountryCode": "CHN"
  }
]

// 这里仅为测试,

module.exports = {
  getCityInfo ({ code }) {
    // 这里处理传入的参数, 并返回与Schema中约定的数据结构
    return mockdb.filter((city) => city.Code === code).pop()
  }
}

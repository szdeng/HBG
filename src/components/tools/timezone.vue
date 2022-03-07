<template>
    <div class="time-box">
        <h2>国际时间转换计算器</h2>
        <div class="main-box" style="padding: 0; box-shadow: none" >
            <div class="style-box">
                日期格式：
                <span @click="changeFormat(1)" style="cursor: pointer">国际</span>
                &nbsp;|&nbsp;
                <span @click="changeFormat(2)" style="cursor: pointer">英式</span>
                &nbsp;|&nbsp;
                <span @click="changeFormat(3)" style="cursor: pointer">美式</span>
            </div>
            <div class="data-box">
                <el-row v-if="format == 1">
                    <el-col :span="2" class="dateLabel">年</el-col>
                    <el-col :span="0.2">&nbsp;</el-col>
                    <el-col :span="2" class="dateLabel">月</el-col>
                    <el-col :span="0.2">&nbsp;</el-col>
                    <el-col :span="2" class="dateLabel">日</el-col>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="2" class="dateLabel">时</el-col>
                    <el-col :span="0.1">&nbsp;</el-col>
                    <el-col :span="2" class="dateLabel">分</el-col>
                    <el-col :span="0.1">&nbsp;</el-col>
                    <el-col :span="2" class="dateLabel">秒</el-col>
                </el-row>
                <el-row v-else-if="format == 2">
                    <el-col :span="2" class="dateLabel">日</el-col>
                    <el-col :span="0.2">&nbsp;</el-col>
                    <el-col :span="2" class="dateLabel">月</el-col>
                    <el-col :span="0.2">&nbsp;</el-col>
                    <el-col :span="2" class="dateLabel">年</el-col>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="2" class="dateLabel">时</el-col>
                    <el-col :span="0.1">&nbsp;</el-col>
                    <el-col :span="2" class="dateLabel">分</el-col>
                    <el-col :span="0.1">&nbsp;</el-col>
                    <el-col :span="2" class="dateLabel">秒</el-col>
                </el-row>
                <el-row v-else>
                    <el-col :span="2" class="dateLabel">月</el-col>
                    <el-col :span="0.2">&nbsp;</el-col>
                    <el-col :span="2" class="dateLabel">日</el-col>
                    <el-col :span="0.2">&nbsp;</el-col>
                    <el-col :span="2" class="dateLabel">年</el-col>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="2" class="dateLabel">时</el-col>
                    <el-col :span="0.1">&nbsp;</el-col>
                    <el-col :span="2" class="dateLabel">分</el-col>
                    <el-col :span="0.1">&nbsp;</el-col>
                    <el-col :span="2" class="dateLabel">秒</el-col>
                </el-row>
                <el-row>
                    <el-col :span="2">
                        <el-select v-model="year.value" style="width: 80px" v-if="format == 1">
                            <el-option
                                v-for="(item, index) in year.options"
                                :popper-append-to-body="false"
                                :key="'year' + index"
                                :label="item"
                                :value="item">
                            </el-option>
                        </el-select>
                        <el-select v-model="day.value" style="width: 80px" v-else-if="format == 2">
                            <el-option
                                v-for="(item, index) in day.options"
                                :popper-append-to-body="false"
                                :key="'day' + index"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="month.value" style="width: 80px" v-else>
                            <el-option
                                v-for="(item, index) in month.options"
                                :popper-append-to-body="false"
                                :key="'month' + index"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="0.1" class="dateSymbol" v-if="format == 1">-</el-col>
                    <el-col :span="0.1" class="dateSymbol" v-else>/</el-col>
                    <el-col :span="2">
                        <el-select v-model="month.value" v-if="format == 1 || format == 2">
                            <el-option
                                v-for="(item, index) in month.options"
                                :popper-append-to-body="false"
                                :key="'month' + index"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="day.value" v-else>
                            <el-option
                                v-for="(item, index) in day.options"
                                :popper-append-to-body="false"
                                :key="'day' + index"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="0.1" class="dateSymbol" v-if="format == 1">-</el-col>
                    <el-col :span="0.1" class="dateSymbol" v-else>/</el-col>
                    <el-col :span="2">
                        <el-select v-model="day.value" v-if="format == 1">
                            <el-option
                                v-for="(item, index) in day.options"
                                :popper-append-to-body="false"
                                :key="'day' + index"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="year.value" v-else>
                            <el-option
                                v-for="(item, index) in year.options"
                                :popper-append-to-body="false"
                                :key="'year' + index"
                                :label="item"
                                :value="item">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="2">
                        <el-select v-model="hour.value">
                            <el-option
                                v-for="(item, index) in hour.options"
                                :popper-append-to-body="false"
                                :key="'hour' + index"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="0.1" class="dateSymbol">:</el-col>
                    <el-col :span="2">
                        <el-select v-model="minute.value">
                            <el-option
                                v-for="(item, index) in minute.options"
                                :popper-append-to-body="false"
                                :key="'minute' + index"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="0.1" class="dateSymbol">:</el-col>
                    <el-col :span="2">
                        <el-select v-model="second.value">
                            <el-option
                                v-for="(item, index) in second.options"
                                :popper-append-to-body="false"
                                :key="'second' + index"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="5">&nbsp;</el-col>
                    <el-col :span="2">
                        <el-button type="primary" @click="transformDate">转换</el-button>
                    </el-col>
                    <el-col :span="2">
                        <el-button type="warning" @click="getNowDate">现在</el-button>
                    </el-col>
                </el-row>
            </div>
            <div class="diff-time-box">
                <!-- <h3>时差计算</h3> -->
                <el-row>
                    <el-col :span="6">
                        <el-select v-model="fromCity" filterable placeholder="选择起始城市">
                            <el-option
                                v-for="(item, index) in city"
                                :key="'fcity' + index"
                                :label="item.name"
                                :value="item.id"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="1"><i class="el-icon-right i-icon"></i></el-col>
                    <el-col :span="6">
                        <el-select v-model="toCity" filterable placeholder="选择目标城市">
                            <el-option
                                v-for="(item, index) in city"
                                :key="'tcity' + index"
                                :label="item.name"
                                :value="item.id"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="2">
                        <el-button type="primary" @click="getDiff">计算</el-button>
                    </el-col>
                    <el-col :span="4">
                        <p>{{ diffrentTime }}</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6" class="bottomTime"><span>{{ fromTime }}</span></el-col>
                    <el-col :span="1">&nbsp;</el-col>
                    <el-col :span="6" class="bottomTime"><span>{{ toTime }}</span></el-col>
                </el-row>
            </div>
            <div class="now-date">{{ nowDate }}</div>
            <div class="show-box">
                <el-table
                    :data="list"
                    :show-header = "false">
                    <el-table-column
                        prop="label"
                        width="600">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        width="580"
                        align="right">
                    </el-table-column>
                </el-table>
            </div>
            
        </div>
    </div>
</template>

<script>
var MONTH=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec")
var WEEK=new Array("Sun","Mon","Tus","Wed","Thu","Fri","Sat")
var json = require('../../../public/json/timezone.json')

export default {
    name: 'timezone',
    data(){
        return {
            format: 1,
            year: { value: '', options: [] },
            month: { value: '', options: [] },
            day: { value: '', options: [] },
            hour: { value: '', options: [] },
            minute: { value: '', options: [] },
            second: { value: '', options: [] },
            list: [],
            city: [],
            fromCity: null,
            toCity: null,
            fromTime: '',
            toTime: '',
            diffrentTime: ''
        }
    },
    created: function(){
        console.log('created');
        this.list = json.timezone
        for(let i = 0; i < this.list.length; i ++){
            let timezone = this.list[i].timezone
            let item = this.list[i].label
            item = item.slice(8)
            item = item.replace(/\s*/g, "")
            let arr = item.split(',')
            for(let j = 0; j < arr.length; j++){
                this.city.push({
                    timezone: timezone,
                    name: arr[j],
                    id: this.city.length
                })
            }
        }
        for(let i = 1970; i <= 2030; i++) this.year.options.push(i)
        for(let i = 1; i <= 12; i++){
            const obj = {
                value: i,
                label: this.addZero(i)
            }
            this.month.options.push(obj)
        }
        for(let i = 1; i <= 31; i++){
            const obj = {
                value: i,
                label: this.addZero(i)
            }
            this.day.options.push(obj)
        }
        for(let i = 0; i <= 23; i++){
            const obj = {
                value: i,
                label: this.addZero(i)
            }
            this.hour.options.push(obj)
        }
        for(let i = 0; i <= 59; i++){
            const obj = {
                value: i,
                label: this.addZero(i)
            }
            this.minute.options.push(obj)
        }
        for(let i = 0; i <= 59; i++){
            const obj = {
                value: i,
                label: this.addZero(i)
            }
            this.second.options.push(obj)
        }
        const createDate = new Date()
        this.year.value = createDate.getFullYear()
        this.month.value = createDate.getMonth() + 1
        this.day.value = createDate.getDate()
        this.hour.value = createDate.getHours()
        this.minute.value = createDate.getMinutes()
        this.second.value = createDate.getSeconds()
        this.setData()
    },
    computed: {
        nowDate: function(){
            const time = new Date(this.year.value, this.month.value - 1, this.day.value, this.hour.value, this.minute.value, this.second.value)
            
            const year = time.getFullYear()
            const month = time.getMonth()+1
            const day = time.getDate()
            const hour = time.getHours()
            const minute = time.getMinutes()
            const second = time.getSeconds()

            const week = WEEK[time.getDay()]
            const showMonth = MONTH[month - 1]
            if(this.format == 1)
                return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
            else if(this.format == 2){
                console.log('format2');
                if(hour - 12 >= 0)
                    return week + ', ' + day +' ' +  showMonth + ' ' + year + ' ' + (hour - 12) + ':' + minute + ':' + second + ' pm'
                else
                    return week + ', ' + day +' ' +  showMonth + ' ' + year + ' ' + hour + ':' + minute + ':' + second + ' am'
            }
            else{
                console.log('format3');
                if(hour - 12 >= 0)
                    return week + ', ' + showMonth +' ' + day  + ', ' + year + ' ' + (hour - 12) + ':' + minute + ':' + second + ' pm'
                else
                    return week + ', ' + showMonth +' ' + day + ', ' + year + ' ' + hour + ':' + minute + ':' + second + ' am'
            }
        }
    },
    methods: {
        getDiff(){
            console.log('get diffrent time');
            if(this.fromCity == null || this.toCity == null){
                this.$message({
                    type: 'error',
                    message: '请选择城市'
                })
            }
            else{
                let from = this.city[this.fromCity].timezone
                let to = this.city[this.toCity].timezone
                console.log(from - to);
                let result = from - to
                this.fromTime = this.getdate(from)
                this.toTime = this.getdate(to)
                if(result < 0){
                    this.diffrentTime = '晚' + Math.abs(result) + '小时'
                }
                else{
                    this.diffrentTime = '早' + result + '小时'
                }
            }
            
        },
        addZero(number){
            if(number >=0 && number <= 9){
                number = '0' + number
            }
            return number
        },
        getNowDate(){
            const now = new Date()
            this.year.value = now.getFullYear()
            this.month.value = now.getMonth() + 1
            this.day.value = now.getDate()
            this.hour.value = now.getHours()
            this.minute.value = now.getMinutes()
            this.second.value = now.getSeconds()
            this.setData()
        },
        getdate(t){
            if(t == null){
                t = 8
            }
            const time = new Date(this.year.value, this.month.value - 1, this.day.value, this.hour.value, this.minute.value, this.second.value)
            
            const len = time.getTime()
            const offset = time.getTimezoneOffset() * 60000
            const utcTime = len + offset
            const date = new Date(utcTime + 3600000 * t)
            
            const y = date.getFullYear(),
                mon = date.getMonth() + 1,
                d = date.getDate(),
                h = date.getHours(),
                m = date.getMinutes(),
                s = date.getSeconds(),
                week = WEEK[date.getDay()],
                showMonth = MONTH[mon - 1]
            
            if(this.format == 1){
                return y + "-" + this.addZero(mon) + "-" + this.addZero(d) + " " + this.addZero(h) + ":" + this.addZero(m) + ":" + this.addZero(s);
            }else if(this.format == 2){
                console.log('format2');
                if(h - 12 >= 0)
                    return week + ', ' + d +' ' +  showMonth + ' ' + y + ' ' + (h - 12) + ':' + m + ':' + s + ' pm'
                else
                    return week + ', ' + d +' ' +  showMonth + ' ' + y + ' ' + h + ':' + m + ':' + s + ' am'
            }
            else{
                console.log('format3');
                if(h - 12 >= 0)
                    return week + ', ' + showMonth +' ' +  d + ', ' + y + ' ' + (h - 12) + ':' + m + ':' + s + ' pm'
                else
                    return week + ', ' + showMonth +' ' +  d + ', ' + y + ' ' + h + ':' + m + ':' + s + ' am'
            }
        },
        setData(){
            for(let i = 0; i < this.list.length; i++){
                this.list[i].date = this.getdate(this.list[i].timezone)
            }
        },
        transformDate(){
            let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
            if(this.year.value%4 == 0){
                days[1] = 29
            }
            const s =  Number(this.day.value) - days[Number(this.month.value) - 1]
            console.log(s);
            if(s > 0){
                this.month.value = Number(this.month.value) + 1
                this.day.value = s
            }
            this.setData()
        },
        changeFormat(type){
            this.format = type
            console.log(type);
            switch(type){
                case 1:
                    console.log('change to 1');
                    break
                case 2:
                    console.log('change to 2')
                    for(let i = 0; i < this.month.options.length; i++){
                        this.month.options[i].label = MONTH[i]
                    }
                    for(let i = 0; i < this.hour.options.length; i++){
                        this.hour.options[i].label = this.hourChange(this.hour.options[i].value)
                    }
                    break
                case 3:
                    console.log('change to 3')
                    for(let i = 0; i < this.month.options.length; i++){
                        this.month.options[i].label = MONTH[i]
                    }
                    for(let i = 0; i < this.hour.options.length; i++){
                        this.hour.options[i].label = this.hourChange(this.hour.options[i].value)
                    }
                    break
                default:
                    break
            }
            this.setData()
        },
        hourChange(hour){
            console.log('changehour');
            console.log(hour);
            const s = hour - 12
            if(s >= 0){
                console.log(s + ' pm');
                return s + ' pm'
            }
            else{
                console.log(hour + ' am');
                return hour + ' am'
            }
        },
        monthChange(month){
            console.log('changemonth');
            console.log(month);
        }
    }
}
</script>

<style lang='scss' scoped>
.time-box{
    width: 100%;
    margin: 0 auto;
    h2{
        text-align: center;
        font-size: 25px;
    }
    .main-box{
        .style-box{
            width: 100%;
            text-align: right;
        }
        .data-box{
            /deep/ .el-select{
                height: 30px;
                width: 100%;
                .el-input__inner{
                    height: 30px;
                }
            }
            .dateLabel{
                padding-left: 8px;
                font-size: 16px;
            }
            .dateSymbol {
                font-size: 23px;
            }
            /deep/ .el-button{
                width: 90%;
                height: 30px;
                line-height: 0;
            }
        }
        .now-date{
            margin: 10px 10px;
            font-size: 14px;
            font-weight: 700;
            color: #002aab;
        }
        .show-box{
            width: 1200px;
            /deep/ .el-table tbody tr:hover>td { 
                background: #ffffff
            }
            /deep/ .el-table__row>td{
                border: none;
                padding: 0;
                &:first-child{
                    color: #07519a
                }
            }
        }
        .diff-time-box{
            width: 100%;
            margin-top: 20px;
            h3{
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 20px;
            }
            .i-icon{
                margin: 0 10px;
                font-size: 25px;
                line-height: 40px;
            }
            .el-select{
                width: 100%;
            }
            .el-button{
                margin-left: 10px;
            }
            p{
                text-align: center;
                height: 40px;
                line-height: 40px;
                font-weight: 700;
                font-size: 25px;
                color: red;
            }
            .bottomTime{
                text-align: center;
                margin-top: 10px;
                font-size: 16px;
            }
        }
    }

}
</style>
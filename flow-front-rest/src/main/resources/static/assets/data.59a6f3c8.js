import{v as t,bv as e}from"./vendor.3dc066e5.js";/* empty css              */const a=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/编码"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}},{field:"dateRange",label:"时间范围",component:"RangePicker",componentProps:{placeholder:"选择时间"},labelWidth:80,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}},{field:"appSn",label:"系统",component:"Select",labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],s=[{title:"状态",width:80,dataIndex:"t3",customRender:({record:a})=>t(e,{status:"success",text:a.processStatusName},null)},{title:"停留时间",width:150,dataIndex:"stayHour",align:"left"},{title:"流程标题",dataIndex:"formName",align:"left",slots:{customRender:"nameRender"}},{title:"提交人\t",width:70,dataIndex:"startPersonName",align:"left"},{title:"提交时间",width:150,dataIndex:"startTime"},{title:"总耗时",width:150,dataIndex:"totalTime",align:"left"},{title:"所属系统",width:150,dataIndex:"appName",align:"left"}],n=[{t1:"2017-10-01 14:10",t2:"联系客户",t3:"进行中",t4:"取货员 ID1234",t5:"5mins"},{t1:"2017-10-01 14:10",t2:"取货员出发",t3:"成功",t4:"取货员 ID1234",t5:"5mins"},{t1:"2017-10-01 14:10",t2:"取货员接单",t3:"成功",t4:"系统",t5:"5mins"},{t1:"2017-10-01 14:10",t2:"申请审批通过",t3:"成功",t4:"用户",t5:"1h"}];export{a as searchFormSchema,n as todoTableData,s as todoTableSchema};
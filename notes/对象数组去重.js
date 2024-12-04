const arr=[
    {a:1,b:2},
    {b:2,a:1},
    {a:1,b:2,c:{a:1,b:2}},
    {b:2,a:1,c:{b:2,a:1}},
];
const isObject=(val)=>typeof val==='object'&&val!==null;//null和null进行比较返回false

function isEqual(obj1,obj2) {
    if(!isObject(obj1)&&!isObject(obj2)){
        return Object.is(obj1,obj2);//考虑到正0和负0的情况，不考虑的话可以直接用===
    }
    if(obj1===obj2)
        return true;
    const obj1key=Object.keys(obj1);
    const obj2key=Object.keys(obj2);
    if(obj1key.length!==obj2key.length)
        return false;
    for(const key of obj1key){
        if(!obj2key.includes(key))
            return false;
        const res=isEqual(obj1[key],obj2[key]);//这里要用[]
        if(!res)
            return false;
        
    }
    return true;
}

for(let i=0;i<arr.length;i++){
    for(let j=0;j<i;j++){
        if(isEqual(arr[i],arr[j])){
            arr.splice(i,1);
            i--;//删除了元素，长度会改变。
        }
    }
}
console.log(arr);

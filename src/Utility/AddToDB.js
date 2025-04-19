const getStoreBook=()=>{
    const storedBookSTR=localStorage.getItem('readList');
    if (storedBookSTR) {
        const storedBookData=JSON.parse(storedBookSTR);
        return storedBookData;
        
    }

    else{
        return [];
    }
}


const AddToStoredDB=(id)=>{
    const storedBookData=getStoreBook();
    if(storedBookData.includes(id)){
        console.log("hello");
        alert('the id is already exist');
    }
    else{
        storedBookData.push(id);
        const data=JSON.stringify(storedBookData);
        localStorage.setItem("readList",data);
    }

}

export {AddToStoredDB,getStoreBook};
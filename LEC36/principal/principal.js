class principal{
    instance = null;
    principal=null;
    _constructor(name){//private bnadiya _ is 
        this.principal=name;
    }

   static getPrincipal(){
    if(!instance){
        let principal=new principal();
        instance=principal;
    }
    return instance;
    } 
    createCurriculum(){

    }
    resticateStudents(){

    }
    suspendStudents(days){

    }
    notify(message){

    }

}

module.exports=principal;
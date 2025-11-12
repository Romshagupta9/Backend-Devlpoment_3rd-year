class principal{
    multipleSchool=new Map();
    _principal=null;
    // instance = null;
    // principal=null;
    _constructor(name){//private bnadiya _ is 
        this.principal=name;
    }

   static getPrincipal(school){
    if(!multipleSchool.has(school)){
        let principal=new principal();
        multipleSchool.set(school,principal);
       // instance=principal;
    }
    //return instance;
    return multipleSchool.get(school);
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

class Cacher {
    private cacheData = {}
	
	constructor(){}
	public get (key:any){
		 if(this.cacheData.hasOwnProperty(key) && this.cacheData[key].val){
			  return this.cacheData[key].val;
		 }
	}
	
	public set (key:any,value:any,expiry:any){
		 this.clear(key);
		 
		 let to:any= false ;
		 
		 if(expiry && parseInt(expiry) > 0){
			  to = setTimeout( () =>{this.clear(key);},parseInt(expiry));
		 }
		 this.cacheData[key] = {
			  expiry : expiry,
			  val : value,
			  timeout: to,
		 }
	}
	public clear(key:any){
	  if(this.cacheData.hasOwnProperty(key)){
			if(this.cacheData[key].to){
				 clearTimeout(this.cacheData[key].to);
				}
		  delete this.cacheData[key];
		  return true;
	 }
	}
};


export default Cacher;

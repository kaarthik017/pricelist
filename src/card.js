export default function Card(props){
     let localButton = () =>{
       props.handleButtonClick()
     }      
     return  <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{props.data.title}</h5>
      <h6 className="card-price text-center">{props.data.fees}<span className="period">{props.data.period}</span></h6>
      <hr />
      <ul className="fa-ul">
        {
          props.data.offer.map((off)=>{
            return <>
             <li className={off.isEnabled ? "":"text-muted"}><span className="fa-li"><i className={`fas ${off.isEnabled?"fa-check":"fa-times"} `}/></span>{off.user}</li>
            </>
          })
        }
        
      </ul>
      <a href="#" className="btn btn-block btn-primary text-uppercase" onClick={localButton}>BUY</a>
    </div>
  </div>
</div>

      
     
      
}
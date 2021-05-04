import logo from './logo.svg';
import './App.css';
import Card from './card';

function App() {
  let data = [
    {
      title:"FREE",
      fees:'$0/',
      period:'month',
      offer : [{
        user:'Single User',
        isEnabled: true
      },
      {
        user:'5GB Storage',
        isEnabled: true
      },
      {
        user:'Unlimited Public Projects',
        isEnabled: true
      },
      {
        user:'Community Access',
        isEnabled: true
      },
      {
        user:'Unlimited Private Projects',
        isEnabled: false
      },
      {
        user:'Dedicated Phone Support',
        isEnabled: false
      },
      {
        user:'Free Subdomain',
        isEnabled: false
      },
      {
        user:'Monthly Status Reports',
        isEnabled: false
      },
    ]
    },
    {
      title:"PLUS",
      fees:'$9/',
      period:'month',
      offer : [{
        user:'5 User',
        isEnabled: true
      },
      {
        user:'50GB Storage',
        isEnabled: true
      },
      {
        user:'Unlimited Public Projects',
        isEnabled: true
      },
      {
        user:'Community Access',
        isEnabled: true
      },
      {
        user:'Unlimited Private Projects',
        isEnabled: true
      },
      {
        user:'Dedicated Phone Support',
        isEnabled: true
      },
      {
        user:'Free Subdomain',
        isEnabled: true
      },
      {
        user:'Monthly Status Reports',
        isEnabled: false
      },
    ]
    },
    {
      title:"PRO",
      fees:'$49/',
      period:'month',
      offer : [{
        user:'unlimited User',
        isEnabled: true
      },
      {
        user:'150GB Storage',
        isEnabled: true
      },
      {
        user:'Unlimited Public Projects',
        isEnabled: true
      },
      {
        user:'Community Access',
        isEnabled: true
      },
      {
        user:'Unlimited Private Projects',
        isEnabled: true
      },
      {
        user:'Dedicated Phone Support',
        isEnabled: true
      },
      {
        user:'Free Subdomain',
        isEnabled: true
      },
      {
        user:'Monthly Status Reports',
        isEnabled: true
      },
    ]
    },
  ]
  let buttonClick = () =>{
    alert("You clicked the button!");
  }
  return <section className="pricing py-5">
  <div className="container">
    <div className="row">
    { 
     data.map((obj)=>{
     return <Card data={obj} handleButtonClick={buttonClick}></Card>
   })
  }
   
   </div>
   </div>
   </section>
  
  
}

export default App;

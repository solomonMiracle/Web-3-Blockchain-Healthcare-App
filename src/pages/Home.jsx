
// CSS
import './Home.css';


/**
 * Home page component
 */
const Home = () => {

  return (
    <div className='home'>

      {/* Background graphic */}
  

      {/* Big bold text */}
     
     <div className='first'>
     <div className='wrapper'><p className='big-title'>
      Blockchain System for Medical Research Funding
      </p>

      <br />
      
      <div className='second-heading'><h3>A Web 3.0 Blockchain Crowdfunding funding platform for Medical and Research Needs</h3>
    </div>
    <div className='Third-heading'><h3>Revolutionizing the Crowdfunding system within the Blockchain Technology</h3>
    </div>
   
</div>
      {/* Features */}
      <div className='feature-list'>
        <div className='item'>
          <svg xmlns="http://www.w3.org/2000/svg" width="26.003" height="26.003" viewBox="0 0 26.003 26.003">
            <path id="icons8-scroll" d="M5.747,1A2.677,2.677,0,0,0,3.064,3.683V19.573a.619.619,0,1,0,1.238,0V3.683A1.436,1.436,0,0,1,5.747,2.238h16.3a2.63,2.63,0,0,0-.413,1.445V24.32a1.445,1.445,0,1,1-2.889,0V22.256a.608.608,0,0,0-.619-.619H1.619A.608.608,0,0,0,1,22.256V24.32A2.677,2.677,0,0,0,3.683,27h16.51a2.677,2.677,0,0,0,2.683-2.683V3.683a1.445,1.445,0,1,1,2.889,0V5.127H24.32a.619.619,0,0,0,0,1.238h2.064A.608.608,0,0,0,27,5.747V3.683A2.677,2.677,0,0,0,24.32,1Zm4.747,4.127a.619.619,0,1,0,0,1.238h4.953a.619.619,0,0,0,0-1.238ZM7.81,11.319a.619.619,0,1,0,0,1.238H18.129a.619.619,0,1,0,0-1.238Zm.041,3.1a.619.619,0,1,0,0,1.238h7.223a.619.619,0,0,0,0-1.238Zm10.277,0a.619.619,0,1,0,.619.619A.619.619,0,0,0,18.129,14.414ZM2.238,22.875H17.51V24.32a2.814,2.814,0,0,0,.413,1.445H3.683A1.436,1.436,0,0,1,2.238,24.32Z" transform="translate(-1 -1)" fill="currentColor"/>
          </svg>
          Smart Contract built
        </div>
        <div className='devider'></div>
        <div className='item'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24.938" height="24.938" viewBox="0 0 24.938 24.938">
            <path id="icons8-ethereum" d="M13.469,1A12.469,12.469,0,1,0,25.938,13.469,12.482,12.482,0,0,0,13.469,1Zm0,1.188A11.281,11.281,0,1,1,2.188,13.469,11.294,11.294,0,0,1,13.469,2.188Zm0,2.739a.594.594,0,0,0-.513.295L8.321,13.17a.6.6,0,0,0,0,.6l4.635,7.946a.593.593,0,0,0,1.025,0l4.635-7.946a.6.6,0,0,0,0-.6L13.981,5.222A.594.594,0,0,0,13.469,4.927Zm0,1.774,3.8,6.507-3.8,2.167-3.8-2.167ZM10.411,15l2.763,1.579a.6.6,0,0,0,.295.079.579.579,0,0,0,.295-.079L16.526,15l-3.058,5.241Z" transform="translate(-1 -1)" fill="currentColor"/>
          </svg>
          On the Blockchain
        </div>
        <div className='devider'></div>
        <div className='item'>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24.938" viewBox="0 0 19 24.938">
            <path id="icons8-lock" d="M22.927,1a3.565,3.565,0,0,0-3.562,3.563V7.1A4.559,4.559,0,0,0,16,11.49v9.9a4.558,4.558,0,0,0,4.552,4.552h9.9A4.558,4.558,0,0,0,35,21.385v-9.9A4.559,4.559,0,0,0,31.635,7.1V4.563A3.565,3.565,0,0,0,28.073,1Zm0,1.188h5.146a2.377,2.377,0,0,1,2.375,2.375V6.938h-9.9V4.563A2.377,2.377,0,0,1,22.927,2.188ZM20.552,8.125h9.9a3.369,3.369,0,0,1,3.365,3.365v9.9a3.369,3.369,0,0,1-3.365,3.365h-9.9a3.369,3.369,0,0,1-3.365-3.365v-9.9A3.369,3.369,0,0,1,20.552,8.125Zm4.948,5.74a2.572,2.572,0,0,0-.594,5.075V20.4a.594.594,0,1,0,1.187,0V18.939a2.572,2.572,0,0,0-.594-5.075Zm0,1.188a1.385,1.385,0,1,1-1.385,1.385A1.387,1.387,0,0,1,25.5,15.052Z" transform="translate(-16 -1)" fill="currentColor"/>
          </svg>
          And Secured
        </div>
      </div >
      <div className='actiondiv'>
      <button  className='Call_to_action'>
      <a href='/create-campaign'>Get-Started</a>
      </button>
      </div>
      </div>

 
    






         
    </div>
  );
};

export default Home;

//  import React from 'react'
import './App.css';
const App=(props)=>{
  return (
    <div class='pricing-table'>
      <div class='pricing-card'>
        <h3 class='pricing-card-header text-muted text-center'>FREE</h3>
        <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
    <hr/>
        <ul>
        <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
        </ul>
        <button class="btn btn-primary">BUTTON</button>
        {/* <a href="#" class="btn btn-primary">BUTTON</a> */}
      </div>
      <div class='pricing-card'>
        <h3 class='pricing-card-header text-muted text-center'>PLUS</h3>
        <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
<hr/>
        <ul>
        <li><span class="fa-li"><i class="fas fa-check"></i></span>5 User</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
        </ul>
        <button class="btn btn-primary">BUTTON</button>
        {/* <a href="#" class="btn btn-primary">BUTTON</a> */}
      </div>
      <div class='pricing-card'>
        <h3 class='pricing-card-header text-muted text-center'>PRO</h3>
        <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
<hr/>
        <ul>
        <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong>
              </li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
        </ul>
        <button class="btn btn-primary">BUTTON</button>
        {/* <a href="#" class="btn btn-primary">BUTTON</a> */}
        </div>
    </div> 
  );
}

export default App

import React, { useState } from 'react';
import "./FormDetails.css";
import axios from 'axios';

function FormDetails(props) {

  const [data, setData] = useState({
    Name: '',
    Email: '',
    DOB: '1940',
    AadharId: undefined,
    Phone: '',
    Vaccination_hospital: 'Starcity Hospital',
    Vaccination_date: ''
  })

  const { Name, Email, DOB, AadharId, Phone, Vaccination_hospital, Vaccination_date } = data;

  const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newRow = { Name, Email, DOB, AadharId, Phone, Vaccination_hospital, Vaccination_date };
    props.hideFn(false, true);

    //Making POST Request
    axios.post('/.netlify/functions/savetoSheet', JSON.stringify(newRow), {headers:{"Content-Type" : "application/json"}})
      .then((response) => {
        console.log('Successfully Added Row');
        setData({ ...data, Name: '', Email: '', DOB: '1940', AadharId: null, Phone: '', Vaccination_hospital: 'Starcity Hospital', Vaccination_date: '' });
        props.hideFn(true, false);
        // props.hideFn(true);
      }, (error) => {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleFormSubmit} >
      <div className="formDetails">
        <p style={{ marginBottom: '40px', textIndent: '2' }}>Certificates are provided by the Indian government and are sent directly to the recipients phone number. We have no responsibilities or liabilities to send the certificates. However, as a courtesy, we will see if we can support you. Please submit your request only if you have not received message from Indian government upto 8 days.</p>
        <h1> Certificate Details</h1>
        <hr />
        <div className="form">
          <div className="details">
            <h3>Vaccination Hospital</h3>

            <select name="Vaccination_hospital" value={Vaccination_hospital} onChange={handleChange} >
              <option value="CB Vaidya Hospital">CB Vaidya Hospital</option>
              <option value="Siddhivinayak Hospital">Siddhivinayak Hospital</option>
              <option value="Starcity Hospital">Starcity Hospital</option>
              <option value="Isha Netralaya">Shwaas Hospital</option>
            </select>
          </div>
          <div className="details">
            <h3>Vaccination Date</h3>
            <input type="date" name="Vaccination_date" value={Vaccination_date} onChange={handleChange} />
          </div>
          <div className="details">
            <h3>Email</h3>
            <p>(Certicate will be emailed to this ID)</p>
            <input type="email" name="Email" value={Email} onChange={handleChange} />
          </div>
          <div className="details">
            <h3>Aadhaar ID</h3>
            <input type="number" name="AadharId" value={AadharId} onChange={handleChange} />
          </div>
          <div className="details">
            <h3>Name</h3>
            <p>(As shown in Aadhar)</p>
            <input type="text" name="Name" value={Name} onChange={handleChange} />
          </div>
          <div className="details">
            <h3>Year of Birth</h3>
            <select name="DOB" value={DOB} onChange={handleChange} >
              <option value="2019">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
              <option value="1989">1989</option>
              <option value="1988">1988</option>
              <option value="1987">1987</option>
              <option value="1986">1986</option>
              <option value="1985">1985</option>
              <option value="1984">1984</option>
              <option value="1983">1983</option>
              <option value="1982">1982</option>
              <option value="1981">1981</option>
              <option value="1980">1980</option>
              <option value="1979">1979</option>
              <option value="1978">1978</option>
              <option value="1977">1977</option>
              <option value="1976">1976</option>
              <option value="1975">1975</option>
              <option value="1974">1974</option>
              <option value="1973">1973</option>
              <option value="1972">1972</option>
              <option value="1971">1971</option>
              <option value="1970">1970</option>
              <option value="1969">1969</option>
              <option value="1968">1968</option>
              <option value="1967">1967</option>
              <option value="1966">1966</option>
              <option value="1965">1965</option>
              <option value="1964">1964</option>
              <option value="1963">1963</option>
              <option value="1962">1962</option>
              <option value="1961">1961</option>
              <option value="1960">1960</option>
              <option value="1959">1959</option>
              <option value="1958">1958</option>
              <option value="1957">1957</option>
              <option value="1956">1956</option>
              <option value="1955">1955</option>
              <option value="1954">1954</option>
              <option value="1953">1953</option>
              <option value="1952">1952</option>
              <option value="1951">1951</option>
              <option value="1950">1950</option>
              <option value="1949">1949</option>
              <option value="1948">1948</option>
              <option value="1947">1947</option>
              <option value="1946">1946</option>
              <option value="1945">1945</option>
              <option value="1944">1944</option>
              <option value="1943">1943</option>
              <option value="1942">1942</option>
              <option value="1941">1941</option>
              <option value="1940">1940</option>
            </select>
          </div>
          <div className="details">
            <h3>Phone number</h3>
            <input type="tel" name="Phone" value={Phone} onChange={handleChange} />
          </div>
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default FormDetails

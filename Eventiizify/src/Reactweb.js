import React,{ useState, useEffect } from 'react';
import './style.css';
// import uuid from 'react-uuid'

export default function Reactweb(props) {
    const [masterDataSource, setMasterDataSource] = useState({});
    
       console.log(props.uId,"yah,it's ok")
      
      
    
      useEffect(() => {
          
        fetch(`https://eventz-test.herokuapp.com/preview/${props.uId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            
            },
          })
            .then((response) => response.json())
            .then((responseJson) => {
              // setFilteredDataSource(responseJson);
              setMasterDataSource(responseJson);
              console.log("In search", responseJson)
            })
            .catch((error) => {
              console.error(error);
            });


     
      }, []);
  return (


    
    <div className="card">
      <div className="bg">
        <h1>
          <u>Quotation</u>
        </h1>
        <p>
            {/* {uuid()} */}
        </p>
        <div className="para">
          <p>
            <b> Syntel</b>
            <br />
            <br />
            <b>
              Atul Anand
              <br />
              Pune, Maharashtra, India
            </b>
          </p>
          <h5 className="address">
            Phone number: 8796220555, Address: Srno 121, Shri Sadguru Krupa,
            Matoshri nagar, Walhekarwadi, Chinchwadgaon, Pune - 411033
          </h5>
          <hr />
        </div>

        <div className="bill">
          <h4 className="billname">
            BILL TO
            <p className="name_address">
              {masterDataSource.customerName}
              <br />
              Address:126/B, Andheri, <br />
              Mumbai-411001
            </p>
          </h4>
          <h4 className="date" >
            Date:{masterDataSource.eventDate}
            <br />
            Venue: {masterDataSource.eventVenue}
          </h4>
        </div>

        <div className="event">
          <h4>Event Details</h4>
          <ul>{masterDataSource.selectedEvent}</ul>
          <h4>Ceremonies</h4>
          <ul>
            <li> Welcome Guest </li>
            <li> Music </li>
            <li> Food Menu</li>
          </ul>
        </div>

        <table border="1px solid green">
          <thead>
            <th>Product Name</th>
            <th>Qty</th>
            <th>Category</th>
            <th>Price(INR)</th>
            <th>Amount(INR)</th>
          </thead>

          {/* {this.props.emps.map((data,index)=> { */}
          {/* return( */}
          <>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
          </>
          {/* )
                    })} */}
        </table>

        <div>
          <h4 className="terms">Terms & Conditions</h4>
          <p className="conditions">
            *Orders once taken cannot be cancelled
            <br />
            *All prices are fixed
          </p>
        </div>
      </div>
    </div>
  );
}

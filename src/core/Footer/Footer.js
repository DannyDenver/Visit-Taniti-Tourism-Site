import React, { Component } from 'react';
import { Table } from 'reactstrap';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer pt-4">
        <div className="container">
          <div className="row justify-content-md-center">

            <div className="col col-sm-10">
              <Table className="table table-sm">
                <tbody>
                  <tr>
                    <td>
                    <a href="/adventure">
                    <h4>Adventure</h4>
                    </a>
                    </td>
                    <td>
                    <a href="/cuisine">
                      <h4>Cuisine</h4>
                      </a>
                    </td>
                    <td>
                    <a href="/">
                      <h4>Contact Us</h4>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    <a href="/culture">
                      <h4>Culture</h4>
                      </a>
                    </td>
                    <td>
                    <a href="/lodging">
                      <h4>Lodging</h4>
                      </a>
                    </td>
                    <td><a href="tel:5555555555">332-888-8888</a></td>
                  </tr>
                  <tr>
                    <td>
                    <a href="/transportation">
                      <h4>Transportation</h4></a>
                    </td>
                    <td>
                    <a href="/faq">
                      <h4>FAQ</h4>
                      </a>
                    </td>
                    <td>🐦 &nbsp; 📘 &nbsp; ✉️ &nbsp; 📷 </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;


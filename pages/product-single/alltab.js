import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Reviews from './reviews';
import ReviewForm from './reviewForm';
import Faq from './faq';


const ProductTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="productTabMenu product-tab-area">
            <div className="row">
                <div className="col col-xs-12">
                    <div className="product-info">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    Description
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >

                                    FAQ
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggle('3'); }}
                                >

                                    Review
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        <div id="Schedule">
                                            <div className="Descriptions-item">
                                                <ul>
                                                    <li>✔️ Made from pure harvest, sourced from farmlands in Sri Lanka</li>
                                                    <li>✔️ No chemicals, preservatives, artificial flavors, or colors added</li>
                                                    <li>✔️ Processed and packaged hygienically in a modern model processing center</li>
                                                    <li>✔️ 100% natural and healthy</li>
                                                    <li>✔️ Non-GMO</li>
                                                </ul>
                                                {/* <div className="Description-table">
                                                    <h4>Find Your Category :</h4>
                                                    <form action="cart" className="table-responsive">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Size</th>
                                                                    <th>Weight</th>
                                                                    <th>Queen</th>
                                                                    <th>Sunflower</th>
                                                                    <th>Hill</th>
                                                                    <th>Forest</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>S</td>
                                                                    <td>250ML</td>
                                                                    <td>60</td>
                                                                    <td>10 - 12</td>
                                                                    <td>20</td>
                                                                    <td>22</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>M</td>
                                                                    <td>500ML</td>
                                                                    <td>62</td>
                                                                    <td>12 - 14</td>
                                                                    <td>21</td>
                                                                    <td>23</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>L</td>
                                                                    <td>1L</td>
                                                                    <td>64</td>
                                                                    <td>14 - 18</td>
                                                                    <td>23</td>
                                                                    <td>24</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Xl</td>
                                                                    <td>2L</td>
                                                                    <td>66</td>
                                                                    <td>18 - 20</td>
                                                                    <td>24</td>
                                                                    <td>25</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2Xl</td>
                                                                    <td>3L</td>
                                                                    <td>68</td>
                                                                    <td>20 - 22</td>
                                                                    <td>25</td>
                                                                    <td>26</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3Xl</td>
                                                                    <td>5L</td>
                                                                    <td>76</td>
                                                                    <td>22 - 24</td>
                                                                    <td>27</td>
                                                                    <td>28</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </form>
                                                </div> */}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Faq />
                            </TabPane>
                            <TabPane tabId="3">
                                <Reviews />
                                <ReviewForm />
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductTabs;
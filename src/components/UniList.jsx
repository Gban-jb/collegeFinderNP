import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function UniList() {
  return (
    <React.Fragment>
        <div>
            <h2 className='text-center text-success my-5'>Find the best University</h2>
        </div>
        
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="http://3.bp.blogspot.com/-k66VCLIYDbI/TtMMCAT0UpI/AAAAAAAAADo/9H6ZJFV76WE/s1600/Tribhuvan+University.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Tribhuban University</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card">
                        <img src="https://pbs.twimg.com/media/DlQdwv3U8AE52t2?format=jpg&name=4096x4096" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Kathmandu University</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4" >
                    <div className="card">
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Purbanchal_University_quarter.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Purbanchal University</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 my-5">
                    <div className="card">
                        <img src="https://assets-cdn.kathmandupost.com/uploads/source/news/2020/news/pokharauniversityjpg-1592705547.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Pokhara University</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>

                

                <div className="col-md-4 my-5" >
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqz5wXHraVC493AQ3PearoXbN8JBlvPtKrMNtPrvZE2oM285XjM9z-ytqyqIZ0yGT23A&usqp=CAU" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Far-western University</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 my-5" >
                    <div className="card">
                        <img src="https://bcl.com.np/wp-content/uploads/2018/08/cob-afu.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Agriculture and Forestry University</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>

        <div className="d-grid col-1 mx-auto">
            
            <NavLink className="btn btn-secondary btn-lg" to="/about">More</NavLink>  
            
        </div>
   
    </React.Fragment>
  )
}


export default UniList
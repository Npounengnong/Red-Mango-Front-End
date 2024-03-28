import React from 'react'
import { menuItemModel } from '../../../../Interfaces'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';

interface Props {
    menuItem: menuItemModel;
}

function MenuItemCard(props:Props) {
  return (
    // <div className="col-md-4 col-12 p-4">
    //   <div
    //     className="card"
    //     style={{ boxShadow: "0 1px 7px 0 rgb(0 0 0 / 50%)" }}
    //   >
    //     <div className="card-body pt-2">
    //       <div className="row col-10 offset-1 p-4">
    //         <img
    //           src={props.menuItem.image}
    //           style={{ borderRadius: "50%" }}
    //           alt=""
    //           className="w-100 mt-5 image-box"
    //         />
    //       </div>

    //       <i
    //         className="bi bi-star btn btn-success"
    //         style={{
    //           position: "absolute",
    //           top: "15px",
    //           left: "15px",
    //           padding: "5px 10px",
    //           borderRadius: "3px",
    //           outline: "none !important",
    //           cursor: "pointer",
    //         }}
    //       >
    //         &nbsp; {props.menuItem.specialTag}
    //       </i>

    //       <i
    //         className="bi bi-cart-plus btn btn-outline-danger"
    //         style={{
    //           position: "absolute",
    //           top: "15px",
    //           right: "15px",
    //           padding: "5px 10px",
    //           borderRadius: "3px",
    //           outline: "none !important",
    //           cursor: "pointer",
    //         }}
    //       ></i>

    //       <div className="text-center">
    //         <p className="card-title m-0 text-success fs-3">{props.menuItem.name}</p>
    //         <p className="badge bg-secondary" style={{ fontSize: "12px" }}>
    //           {props.menuItem.category}
    //         </p>
    //       </div>
    //       <p className="card-text" style={{ textAlign: "center" }}>
    //         {props.menuItem.description}
    //       </p>
    //       <div className="row text-center">
    //         <h4>${props.menuItem.price}</h4>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="col-md-4 col-12 p-4">
        <MDBCard>
            <MDBCardImage src={props.menuItem.image} position='top' alt='...' />
            <MDBCardBody>
            {props.menuItem.specialTag && props.menuItem.specialTag.length>0 && (
                <i
                    className="bi bi-star btn btn-success"
                    style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    padding: "5px 10px",
                    borderRadius: "3px",
                    outline: "none !important",
                    cursor: "pointer",
                    }}
                >
                    &nbsp; {props.menuItem.specialTag}
                </i>
            )}
                <MDBCardTitle></MDBCardTitle>
                <div className="text-center">
                    <p className="card-title m-0 text-success fs-3">{props.menuItem.name}</p>
                    <p className="badge bg-secondary" style={{ fontSize: "12px" }}>
                        {props.menuItem.category}
                    </p>
                </div>
                <MDBCardText>
                    {props.menuItem.description}
                </MDBCardText>
                <div className='row text-center'>
                    <h4>${props.menuItem.price}</h4>
                </div>
                <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    </div>

  )
}

export default MenuItemCard

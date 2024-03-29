import React from "react";
import { menuItemModel } from "../../../../Interfaces";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

interface Props {
  menuItem: menuItemModel;
}

function MenuItemCard(props: Props) {
  return (
    <div className="col-md-4 col-12 p-4">
      <MDBCard>
        <Link to={`/menuItemDetails/${props.menuItem.id}`}>
          <MDBCardImage src={props.menuItem.image} position="top" alt="..." />
        </Link>
        <MDBCardBody>
          {props.menuItem.specialTag &&
            props.menuItem.specialTag.length > 0 && (
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
            <Link
              to={`/menuItemDetails/${props.menuItem.id}`}
              style={{ textDecoration: "none" }}
            >
              <p className="card-title m-0 text-success fs-3">
                {props.menuItem.name}
              </p>
            </Link>
            <p className="badge bg-secondary" style={{ fontSize: "12px" }}>
              {props.menuItem.category}
            </p>
          </div>
          <MDBCardText>{props.menuItem.description}</MDBCardText>
          <div className="row text-center">
            <h4>${props.menuItem.price}</h4>
          </div>
          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default MenuItemCard;

import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default class NavBarMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={"navbar-default"} style={{ backgroundColor: "#263342", height: "60px" }}>
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className={"navbar"}>
                    <ul className={"nav navbar-nav"} style={{ width: "100%" }}>
                        <div className={"col-xs-6 text-left"} style={{ color: "white" }}>
                          <ButtonGroup>
                            <Button color="primary">Home</Button>{' '}
                            <Button color="primary">About</Button>{' '}
                            <Button color="primary">Contact</Button>{' '}
                            <Button color="primary">Media</Button>{' '}
                            <Button color="primary">Portfolio</Button>{' '}
                          </ButtonGroup>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
import React, { PureComponent } from "react";
import CustomForm from "@rjsf/core";

class DynamicFormChild extends PureComponent {


  render() {
	return (
						<CustomForm schema={this.props.schema}
								onSubmit={this.props.onSubmit}
								onError={this.props.onError} 
								formData={this.props.formData}
								showErrorList={false} 	>
						</CustomForm>
	);
  }

}

export default DynamicFormChild;
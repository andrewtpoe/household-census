import React, { Component, PropTypes } from 'react';

import CensusForm from '../components/census_form';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCensusFormValues } from '../actions/view/census_form_actions';

function mapStateToProps(state) {
  return {
    censusForm: state.view.censusForm,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      setCensusFormValues,
    }, dispatch),
  };
};

class CensusFormContainer extends Component {

  static propTypes = {
    actions: PropTypes.shape({
      setCensusFormValues: PropTypes.func.isRequired,
    }),
    censusForm: PropTypes.object.isRequired,
  };

  render() {
    const props = this.props;
    console.log('*** CensusFormContainer props ***');
    console.log(props);
    return (
      <CensusForm { ...props }/>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(CensusFormContainer);

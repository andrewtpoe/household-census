import React, { PropTypes } from 'react';

const _buildForm = ({
  actions: {
    setCensusFormValues,
  },
  censusForm: {
    address,
    city,
    state,
    zipCode,
    numberOfBedrooms,
  },
}) => (
  <div>
    <h1 >Tell me about your house...</h1>
    <form >
      <div className="container-fluid" >
        <div className="row" >
          <div className="form-group" >
            <label htmlFor="address">
              Street Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="123 Your St."
              value={address}
              onChange={(e) => {
                e.preventDefault();
                setCensusFormValues({
                  address: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="row" >
          <div className="col-sm-6 no-padding-left no-padding-right" >
            <div className="form-group" >
              <label htmlFor="city" >
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Youville"
                value={city}
                onChange={(e) => {
                  e.preventDefault();
                  setCensusFormValues({
                    city: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="col-sm-3 no-padding-left-sm no-padding-right" >
            <div className="form-group" >
              <label htmlFor="state" >
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="YS"
                value={state}
                onChange={(e) => {
                  e.preventDefault();
                  setCensusFormValues({
                    state: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="col-sm-3 no-padding-left-sm no-padding-right" >
            <div className="form-group" >
              <label htmlFor="zip" >
                Zip Code
              </label>
              <input
                type="text"
                className="form-control"
                id="zip"
                placeholder="54321"
                value={zipCode}
                onChange={(e) => {
                  e.preventDefault();
                  setCensusFormValues({
                    zipCode: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="row" >
          <div className="col-sm-8 no-padding-left no-padding-right" >
            <label className="vertical-text-align-middle-xs" >
              How many bedrooms do you have?
            </label>
          </div>
          <div className="col-sm-4 no-padding-left-sm no-padding-right" >
            <div className="form-group" >
              <label
                className="sr-only"
                htmlFor="bedrooms"
              >
                Bedrooms
              </label>
              <input
                type="text"
                className="form-control"
                id="bedrooms"
                placeholder="4"
                value={numberOfBedrooms}
                onChange={(e) => {
                  e.preventDefault();
                  setCensusFormValues({
                    numberOfBedrooms: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
);

const censusForm = ({ ...props }) => (
  <section
    className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4"
  >
    {_buildForm({ ...props })}
  </section>
);

export default censusForm;
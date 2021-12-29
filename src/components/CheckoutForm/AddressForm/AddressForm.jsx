import React, {useState, useEffect} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import './AddressForm.scss';
import { commerce } from '../../../lib/commerce';
import { Link } from 'react-router-dom';

function AddressForm({checkoutToken, next}) {
    const { control, handleSubmit } = useForm({
        defaultValues:{
            firstName:'',
            lastName:'',
            address:'',
            email:'',
            city:'',
            postal: ''
        }
    });
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name}));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name}));
    const options = shippingOptions.map((shipOpt) => ({ id: shipOpt.id, label: `${shipOpt.description} - (${shipOpt.price.formatted_with_symbol})`}));

    const fetchShippingCountries = async (checkoutTokenId) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }

    const fetchSubdivisions = async(countryCode) => {
        const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode);
        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    }

    const fetchShippingOptions = async(checkoutTokenId, country, region=null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region });
        setShippingOptions(options);
        setShippingOption(options[0].id);
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, []);

    
    useEffect(() => {
        if(shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]) //Whenever shippingCountry changes, useEffect will re-run

    useEffect(() => {
        if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    },[shippingSubdivision])


    const onSubmit = (data) => {
        next({...data, shippingCountry, shippingSubdivision, shippingOption});
    }

    return (
        <div className="addressForm">
          <h4>Shipping Address</h4>
          <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="formCard">
                <Controller  
                    name="firstName"
                    control={control}
                    render={({field}) => 
                        <FloatingLabel controlId="floatingInput" label="First Name" size='lg'>
                        <Form.Control {...field} type="text" />
                        </FloatingLabel>}
                    />
                    <Controller  
                    name="lastName"
                    control={control}
                    render={({field}) => 
                        <FloatingLabel controlId="floatingInput" label="Last Name">
                        <Form.Control {...field} type="text"/>
                        </FloatingLabel>}
                    />
                    <Controller  
                    name="address"
                    control={control}
                    render={({field}) => 
                        <FloatingLabel controlId="floatingInput" label="Address">
                        <Form.Control {...field} type="text" />
                        </FloatingLabel>}
                    />
                    <Controller  
                    name="email"
                    control={control}
                    render={({field}) => 
                        <FloatingLabel controlId="floatingInput" label="Email">
                        <Form.Control {...field} type="email" />
                        </FloatingLabel>}
                    />
                    <Controller  
                        name="city"
                        control={control}
                        render={({field}) => 
                            <FloatingLabel controlId="floatingInput" label="City">
                                <Form.Control {...field} type="text" />
                            </FloatingLabel>}
                    />  
                    <Controller  
                        name="postal"
                        control={control}
                        render={({field}) => 
                            <FloatingLabel controlId="floatingInput" label="Postal/ZIP">
                                <Form.Control {...field} type="text" />
                            </FloatingLabel>}
                    />
                    <FloatingLabel controlId="floatingSelectGrid" label="Shipping Country">
                        <Form.Select onChange={(e) => setShippingCountry(e.target.value)}>
                            {countries.map((country) => (
                                <option value={country.id}>{country.label}</option>
                            ))}
                        </Form.Select>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingSelectGrid" label="Shipping States">
                        <Form.Select onChange={(e) => setShippingSubdivision(e.target.value)}>
                            {subdivisions.map((subdivision) => (
                                <option value={subdivision.id}>{subdivision.label}</option>
                            ))}
                        </Form.Select>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingSelectGrid" label="Shipping Options">
                        <Form.Select onChange={(e) => setShippingOptions(e.target.value)}>
                            {options.map((option) => (
                                <option value={option.id}>{option.label}</option>
                            ))}
                        </Form.Select>
                    </FloatingLabel>
              </div>
              <div className="checkOutButtons">
                  <Link to="/cart">
                    <Button variant="outline-dark">Back to Cart </Button>
                  </Link>
                  <Button variant="secondary" type="submit">Next</Button>
              </div>
          </Form>
        </div>
    )
}

export default AddressForm

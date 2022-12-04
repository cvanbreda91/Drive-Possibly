import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_DRUGS, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { QUERY_DRUGS }  from '../../utils/queries';
import { useQuery } from '@apollo/client';
import spinner from '../../assets/spinner.gif';

function DrugItem(item) {
    const [state, dispatch] = useStoreContext();

    const {
        _id,
        drugName,
        inventory,
        dinNumber,
        description
    } = item;

    const { cart } = state

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id)
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...item, purchaseQuantity: 1 }
            });
            idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
    }

    return (
        <div className="card px-1 py-1">
            <Link to={`/drugs/${_id}`}>
                <p>{drugName}</p>
            </Link>
            <div>
                <div>{inventory} {pluralize("item", inventory)} in stock</div>
            </div>
            <div>
                <div>{description}</div>
                <div>{dinNumber}</div>
            </div>
            <button onClick={addToCart}>Add to order</button>
        </div>
    );
}

function DrugList() {
    const [state, dispatch] = useStoreContext();

    const { loading, data } = useQuery(QUERY_DRUGS);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_DRUGS,
                products: data.drugs,
            });
            data.drugs.forEach((drug) => {
                idbPromise('drugs', 'put', drug);
            });
        } else if (!loading) {
            idbPromise('drugs', 'get').then((drugs) => {
                dispatch({
                    type: UPDATE_DRUGS,
                    products: drugs,
                });
            });
        }
    }, [data, loading, dispatch]);
    return (
        <div className="my-2">
            <h2>Drugs:</h2>
            {state.drugs.length ? (
                <div className="flex-row">
                    {DrugItem().map((drug) => (
                        <DrugItem
                            key={drug._id}
                            _id={drug._id}
                            name={drug.drugName}
                            inventory={drug.inventory}
                            description={drug.description}
                        />
                    ))}
                </div>
            ) : (
                <h3>Don't you need some drugs?</h3>
            )}
            {loading ? <img src={spinner} alt="loading" /> : null}
        </div>
    );
}

export default { DrugItem, DrugList };
import React from 'react';
import { Product as ProductType } from '../products';
import styles from './Product.module.scss';

const Product = ({ id, data }: { id: number; data: ProductType; }) => {
    console.info(`Component: Product`);
    return (
        <div className={styles.Product}>
            <img src={data.thumbnail} alt={data.name} />
            <div className={styles.title}>
                <h3>{data.name}</h3>
                <span>{data.sold_count}+ sold</span>
            </div>
            <div className={styles.rating}>⭐{data.rating.toFixed(1)}</div>
            <div className={styles.details}>
                <h4>Product feature details</h4>
                <h4>Shipping free/ return details</h4>
            </div>
            <div className={styles.price}>
                <div>
                    <span className={styles.team}>&#8377; {data.price}</span>
                    <span className={styles.caption}>In a team of 5</span>
                </div>
                <div>
                    <span className={styles.indiv}>&#8377; {data.price}</span>
                    <span className={styles.caption}>Individual</span>
                </div>
            </div>

            <div className={styles.group}>
                <div className={styles.heading}>
                    <h5>Active groups- 7</h5>
                    <h5>See more</h5>
                </div>
                <div className={styles.content}>
                    <div>
                        <h5>Asha is looking for 4 more people</h5>
                        <h5>2:01:12</h5>
                        <button>Join</button>
                    </div>
                    <div>
                        <h5>Raj is looking for 3 more people</h5>
                        <h5>3:50:14</h5>
                        <button>Join</button>
                    </div>
                </div>
            </div>

            <div className={styles.htp}>
                <div className={styles.heading}>
                    <h5>How to play?</h5>
                    <h5>See detail ➡</h5>
                </div>
                <div className={styles.content}>
                    <div>
                        <h5>Select product</h5>
                        <h4>1</h4>
                    </div>
                    <div>
                        <h5>Make a purchase to start a team or join a team</h5>
                        <h4>2</h4>
                    </div>
                    <div>
                        <h5>Waiit to complete the team</h5>
                        <h4>3</h4>
                    </div>
                    <div>
                        <h5>Group purchase successful</h5>
                        <h4>4</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
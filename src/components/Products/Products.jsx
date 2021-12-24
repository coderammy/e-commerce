import Grid from "@material-ui/core/Grid";
import React from "react";
import Product from "./Product/Product";
import useStyles from "./styles";

const products =[
    {id: 1, name:'gym',description:"Gym  template.",price:'10',image:'https://www.free-css.com/assets/images/free-css-templates/page272/evolve.jpg'},
     {id: 2, name:'hotel',description:"hotel  template.",price:'20',image:'https://s.tmimgcdn.com/scr/800x500/51400/free-hotel-website-template_51453-0-original.jpg'},
     {id: 3, name:'Food',description:"food  template.",price:'85',image:'https://colorlib.com/wp/wp-content/uploads/sites/2/touche-1024x545.jpg.webp'},
];

const Products = () =>{
    const classes = useStyles();
    
    return (
    <main className={classes.content}>
        <div className={classes.toolbar} /> 
        <Grid container justifyContent ="center" spacing={4}>
            {products.map((product)=> (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product}/>
            </Grid>
        ))}
        </Grid> 
    </main>
    )
} 

export default Products;  
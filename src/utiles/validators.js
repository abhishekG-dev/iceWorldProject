
export const descriptionValidate = description => 
    description ? null : 'You must enter a description'

export const quantityValidate = ({inStock,quantity}) => {
       return (inStock && quantity === '0') ?  'An in stock item should have a quantity'
        : null
}
export const priceValidate = price =>{
     const regex = /^[0-9]+(\.[0-9][0-9])$/

    if(!price || price === '0.00'){
        return 'You must enter a price'
    }
    else if(!regex.test(price.trim())){
        return 'Please enter a valid price'
    }
    return null
}        
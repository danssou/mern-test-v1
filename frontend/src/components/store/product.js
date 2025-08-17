import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    SetProducts: (products) => set({products}),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return {success : false, message:"Please fill all Fieldset."}
        }
        const res = await fetch("/api/products", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct),
        });

        const data = await res.json();
        set((state) => ({products:[...state.products, data.data]}));
        return {success : true, message:"Product created successfully"};
    },
    fetchProducts: async () => {
        const res = await fetch("/api/products") 
        const data = await res.json();
        set({products: data.data})

        
    },

    deleteProduct: async (p_ID) => {
        const res = await fetch(`/api/products/${p_ID}`, {
            method: 'DELETE',
        });

        const data = await res.json();
        if(!data.success) return {success: false, message: data.message};

        set(state => ({ products: state.products.filter(product => product._id !== p_ID)}));
        return {success : true, message:data.message};
    },

    updateProduct: async (p_ID, updatedProduct) => {
        const res = await fetch(`/api/products/${p_ID}`, {
            method: 'PUT',
             headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updatedProduct),
        })
        
        const data = await res.json();
        if (!data.success) {
            return {success: false, message: data.message}
        };

        // update without refresh 

        set(state => ({
            products:state.products.map(product => product._id === p_ID ? data.data : product)
        }));

        return {success: true, message: data.message}

    },
}));
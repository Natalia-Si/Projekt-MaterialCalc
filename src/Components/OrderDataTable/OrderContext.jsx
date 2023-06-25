import React, {createContext, useEffect, useState} from "react";
import { collection, onSnapshot, addDoc, getDocs, deleteDoc, doc} from "firebase/firestore";
import { db } from "../../firebase.js"


export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([])
    const [orderCount, setOrderCount] = useState(1);

    //Pobranie danych o zamówieniach z firebase (onSnapshot zbiera dane za pomocą doc.data i ustawia je jako nowy stan dla orders w setOrders
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "orders"), (snapshot) => {
            const fetchedOrders = snapshot.docs.map((doc) => {
                const data = doc.data();
                data.id = doc.id; // Przypisanie unikalnego id
                return data;
            });
            setOrders(fetchedOrders);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const addOrder = async (order) => {
        try {
            await addDoc(collection(db, "orders"), order);
        } catch (error) {
            console.log("Błąd podczas dodawania zamówienia: ", error);
        }
    };

    const deleteOrder = async (orderId) => {
        try {
            const docRef = doc(db, "orders", orderId);
            await deleteDoc(docRef);
        } catch (error) {
            console.log("Błąd podczas usuwania zamówienia: ", error);
        }
    }

    return (
        <OrderContext.Provider value={{ orders, addOrder, deleteOrder, orderCount, setOrderCount }}>
            {children}
        </OrderContext.Provider>
    );
};




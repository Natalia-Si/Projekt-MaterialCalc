import React, { useEffect, useState} from "react";
import "./OrderDataTable.css"
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, TextField, IconButton} from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete.js";
import AddIcon from "@mui/icons-material/Add";
import EuroIcon from "@mui/icons-material/Euro.js";
import {products, sizes, colors} from "../../productsource.js";


export default function OrderDataTable() {



    const [selectedProducts, setSelectedProducts] = useState([
        {
            id: null,
            name: "",
            size: "",
            color: "",
            price: "",
            quantity: "",
            totalPrice: 0,
            action: null,
        }
    ]);

    const [selectedCurrency, setSelectedCurrency] = useState(""); // Wybrana waluta
    const [exchangeRateData, setExchangeRateData] = useState([]); // Kurs walut
    const [selectedDate, setSelectedDate] = useState(""); // Wybrana data
    const [todayRate, setTodayRate] = useState(0);


    const getProductPrice = (productName) => {
        const product = products.find((p) => p.name === productName);
        return product ? product.price : 0;
    };

    const handleProductChange = (e, selectedProductId) => {
        const { value } = e.target;
        const productPrice = getProductPrice(value)
        setSelectedProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === selectedProductId ? { ...product, name: value, price: productPrice } : product
            )
        );
    };

    const handleSizeChange = (e, selectedProductId) => {
        const { value } = e.target;
        setSelectedProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === selectedProductId ? { ...product, size: value } : product
            )
        );
    };

    const handleColorChange = (e, selectedProductId) => {
        const { value } = e.target;
        setSelectedProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === selectedProductId ? { ...product, color: value } : product
            )
        );
    };

    const handleQuantityChange = (e, selectedProductId) => {
        const { value } = e.target;
        setSelectedProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === selectedProductId
                    ? { ...product, quantity: parseInt(value) || 0 }
                    : product
            )
        );
    };

    const handleDeleteRow = (selectedProductId) => {
        setSelectedProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== selectedProductId)
        );
    };

    useEffect(() => {
        calculateTotalPricesRow();
    }, [selectedProducts]);

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const response = await fetch(
                    "http://api.nbp.pl/api/exchangerates/tables/A/last/30?format=json"
                );
                const data = await response.json();
                const rates = data[0].rates;
                console.log("Exchange rate data:", rates);

                const selectedRate = rates.find((rate) => rate.code === selectedCurrency);
                if (selectedRate) {
                    setTodayRate(selectedRate.mid);
                } else {
                    setTodayRate(0);
                }

                setExchangeRateData(rates);
                const today = new Date().toISOString().split("T")[0];
                setSelectedDate(today);
            } catch (error) {
                console.log("Error fetching exchange rates:", error);
            }
        };

        fetchExchangeRates();
    }, [selectedCurrency]);

    const calculateTotalPricesRow = () => {
        const updatedProducts = selectedProducts.map((product) => {
            const totalPrice = product.price * product.quantity;
            return { ...product, totalPrice };
        });
        setSelectedProducts(updatedProducts);
    };

    const handleAddRow = () => {
        const newProductId = selectedProducts.length + 1;
        setSelectedProducts((prevProducts) => [
            ...prevProducts,
            {
                id: newProductId,
                name: "",
                size: "",
                color: "",
                price: 0,
                quantity: "",
                totalPrice: 0,
            },
        ]);
    };


    const calculateTotalSummary = () => {
        const totalSummary = selectedProducts.reduce(
            (total, product) => total + product.totalPrice,
            0
        );
        return totalSummary;
    };

    const convertCurrency = () => {
        const selectedRate = exchangeRateData.find(
            (rate) => rate.code === selectedCurrency
        );
        if (selectedRate) {
            const convertedTotalSummary = calculateTotalSummary() / selectedRate.mid;
            return convertedTotalSummary.toFixed(2);
        }
        return "";
    };

    const handleCurrencyChange = (e) => {
        const { value } = e.target;
        setSelectedCurrency(value);
    };

    const renderTableRows = () => {
        return selectedProducts.map((product) => (
            <TableRow key={product.id}>
                {/* PRODUKT */}
                <TableCell>
                    <Select
                        value={product.name}
                        onChange={(e) => handleProductChange(e, product.id)}
                        style={{ width: '200px' }}
                    >
                        {products.map((prod) => (
                            <MenuItem key={prod.id} value={prod.name}>
                                {prod.name}
                            </MenuItem>
                        ))}
                    </Select>
                </TableCell>

                {/* ROZMIAR */}
                <TableCell>
                    <Select
                        value={product.size}
                        onChange={(e) => handleSizeChange(e, product.id)}
                        style={{ width: '80px' }}
                    >
                        {sizes.map((size) => (
                            <MenuItem key={size} value={size}>
                                {size}
                            </MenuItem>
                        ))}
                    </Select>
                </TableCell>

                {/* KOLOR */}
                <TableCell>
                    <Select
                        value={product.color}
                        onChange={(e) => handleColorChange(e, product.id)}
                        style={{ width: '150px' }}
                    >
                        {colors.map((color) => (
                            <MenuItem key={color} value={color}>
                                {color}
                            </MenuItem>
                        ))}
                    </Select>
                </TableCell>

                {/* ILOSC */}
                <TableCell>
                    <TextField
                        type="number"
                        value={product.quantity}
                        onChange={(e) => handleQuantityChange(e, product.id)}
                        style={{ width: '100px' }}
                    ></TextField>
                </TableCell>

                {/* CENA ZA SZT */}
                <TableCell>{parseFloat(product.price).toFixed(2)}</TableCell>

                {/* CENA RAZEM */}
                <TableCell>{parseFloat(product.totalPrice).toFixed(2)}</TableCell>

                {/* USUWANIE */}
                <TableCell align={"left"}>
                    <IconButton onClick={() => handleDeleteRow(product.id)}>
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        ));
    };



    const renderCurrencyOptions = () => {
        return Array.isArray(exchangeRateData) ? (
            exchangeRateData.map((rate) => (
                <option key={rate.code} value={rate.code}>
                    {rate.code}
                </option>
            ))
        ) : null;
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Produkt</TableCell>
                            <TableCell>Rozmiar DN</TableCell>
                            <TableCell>Kolor</TableCell>
                            <TableCell>Ilość</TableCell>
                            <TableCell>Cena PLN/szt</TableCell>
                            <TableCell>Cena RAZEM</TableCell>
                            <TableCell>Akcja</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderTableRows()}
                        <TableRow className="summary">
                            <TableCell colSpan={7} align="right">
                                <IconButton onClick={handleAddRow}>
                                    <AddIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow className="total-summary">
                            <TableCell colSpan={5} align="right">
                                <strong>Total: </strong>
                            </TableCell>
                            <TableCell>{calculateTotalSummary().toFixed(2)} PLN</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            {/*CURRENCY CALCULATOR*/}
            <div className="currencyCalc">
                <div className="exchangeData">
                    <div className="logoCalc">
                        <EuroIcon/>
                    </div>
                    <div className="currencyContainer">
                        <div className="currencyInfo">
                            <span>Przelicz na:</span>
                            <select className="currencySelect" onChange={handleCurrencyChange}>
                                <option value="">Wybierz walutę</option>
                                {renderCurrencyOptions()}
                            </select>
                        </div>
                        <div className="dateInfo">
                            <span>Kurs z dnia: {selectedDate}</span>
                        </div>
                        <div className="currencyValue">Wartość kursu: {selectedCurrency} jest równa {todayRate} PLN</div>
                    </div>
                    <div className="currencyConverted">
                        {selectedCurrency && selectedDate && (
                            <span>
                                {convertCurrency()} {selectedCurrency}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
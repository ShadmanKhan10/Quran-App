import React, { useState, useEffect } from "react";
import { ZakatBannerData } from "../Banner/BannerData";
import Banner from "../Banner/Banner";

import axios from "axios";

const ZakatCalculator = () => {
  const [goldPrice, setGoldPrice] = useState(null);
  const [silverPrice, setSilverPrice] = useState(null);
  const [nisabGold, setNisabGold] = useState(null);
  const [nisabSilver, setNisabSilver] = useState(null);
  const [nisabUsed, setNisabUsed] = useState(null);
  const [formData, setFormData] = useState({
    savings: "",
    gold: "",
    silver: "",
    businessAssets: "",
    debts: "",
  });
  const [zakatDue, setZakatDue] = useState(null);
  const GOLD_API_KEY = import.meta.env.VITE_GOLD_API_KEY;

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const [goldRes, silverRes] = await Promise.all([
          axios.get("https://www.goldapi.io/api/XAU/USD", {
            headers: {
              "x-access-token": GOLD_API_KEY, // replace with your API key
              "Content-Type": "application/json",
            },
          }),
          axios.get("https://www.goldapi.io/api/XAG/USD", {
            headers: {
              "x-access-token": GOLD_API_KEY,
              "Content-Type": "application/json",
            },
          }),
        ]);

        const goldPerGram = goldRes.data.price / 31.1035;
        const silverPerGram = silverRes.data.price / 31.1035;

        const nisabG = goldPerGram * 87.48;
        const nisabS = silverPerGram * 612.36;

        setGoldPrice(goldPerGram);
        setSilverPrice(silverPerGram);
        setNisabGold(nisabG);
        setNisabSilver(nisabS);
        setNisabUsed(Math.min(nisabG, nisabS)); // Lower value used for Zakat eligibility
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateZakat = (e) => {
    e.preventDefault();
    const savings = parseFloat(formData.savings) || 0;
    const gold = parseFloat(formData.gold) || 0;
    const silver = parseFloat(formData.silver) || 0;
    const businessAssets = parseFloat(formData.businessAssets) || 0;
    const debts = parseFloat(formData.debts) || 0;

    const totalGoldValue = gold * goldPrice;
    const totalSilverValue = silver * silverPrice;

    const totalAssets =
      savings + totalGoldValue + totalSilverValue + businessAssets;

    const zakatableWealth = totalAssets - debts;

    if (zakatableWealth >= nisabUsed) {
      const zakat = zakatableWealth * 0.025;
      setZakatDue(zakat.toFixed(2));
    } else {
      setZakatDue(0);
    }
  };

  return (
    <>
      <Banner BannerData={ZakatBannerData} />
      <div className="zakat-calculator-container">
        <h1 className="zakat-calculator-title">Zakat Calculator</h1>

        {goldPrice && silverPrice && nisabUsed ? (
          <>
            <div className="zakat-price-info">
              <p className="price-item">
                <strong>Gold Price:</strong> ${goldPrice.toFixed(2)} / gram
              </p>
              <p className="price-item">
                <strong>Silver Price:</strong> ${silverPrice.toFixed(2)} / gram
              </p>
              <p className="price-item">
                <strong>Gold Nisab:</strong> ${nisabGold.toFixed(2)} (87.48g)
              </p>
              <p className="price-item">
                <strong>Silver Nisab:</strong> ${nisabSilver.toFixed(2)}{" "}
                (612.36g)
              </p>
              <p className="price-item">
                <strong>Nisab Used:</strong> ${nisabUsed.toFixed(2)} (Lower of
                Gold or Silver)
              </p>
            </div>

            <form className="zakat-form" onSubmit={calculateZakat}>
              <label className="zakat-input-group">
                Savings and Cash:
                <input
                  type="number"
                  name="savings"
                  value={formData.savings}
                  onChange={handleChange}
                  className="zakat-input"
                />
              </label>
              <label className="zakat-input-group">
                Gold in grams:
                <input
                  type="number"
                  name="gold"
                  value={formData.gold}
                  onChange={handleChange}
                  className="zakat-input"
                />
              </label>
              <label className="zakat-input-group">
                Silver in grams:
                <input
                  type="number"
                  name="silver"
                  value={formData.silver}
                  onChange={handleChange}
                  className="zakat-input"
                />
              </label>
              <label className="zakat-input-group">
                Business Assets:
                <input
                  type="number"
                  name="businessAssets"
                  value={formData.businessAssets}
                  onChange={handleChange}
                  className="zakat-input"
                />
              </label>
              <label className="zakat-input-group">
                Debts:
                <input
                  type="number"
                  name="debts"
                  value={formData.debts}
                  onChange={handleChange}
                  className="zakat-input"
                />
              </label>
              <button className="zakat-submit-button" type="submit">
                Calculate Zakat
              </button>
            </form>

            {zakatDue !== null && (
              <div className="zakat-result">
                {zakatDue > 0 ? (
                  <p className="zakat-due">
                    <strong>Zakat Due:</strong> ${zakatDue}
                  </p>
                ) : (
                  <p className="zakat-not-eligible">
                    You are not eligible to pay zakat (below Nisab).
                  </p>
                )}
              </div>
            )}
          </>
        ) : (
          <p className="loading-message">Loading gold and silver prices...</p>
        )}
      </div>
    </>
  );
};

export default ZakatCalculator;

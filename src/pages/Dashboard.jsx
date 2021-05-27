import React, { useEffect, useState, useMemo } from "react";
import Select from "react-select";
import ChartComponent from "../components/Chart";
import { getProperties, getProperty } from "../services/property";

const Dashboard = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(false);

  const _getProperties = async () => {
    const data = await getProperties();

    let _properties = [];
    data.properties.map((item) => {
      _properties.push({
        value: { item },
        label: item.propertyName,
      });
    });
    setProperties(_properties);

    const property = await getProperty(data.properties[0].propertyId);
    setProperty(property.property[0]);
  };

  useEffect(() => {
    _getProperties();
  }, []);

  const _getProperty = async () => {
    const data = await getProperty(selectedProperty.value.item.propertyId);
    setProperty(data.property[0]);
    setLoading(false);
  };

  useEffect(() => {
    if (selectedProperty) {
      setLoading(true);
      _getProperty();
    }
  }, [selectedProperty]);

  if (loading) {
    return <h1>Loading . . .</h1>;
  }

  return (
    <div className="dashboard-container">
      <div style={{ marginTop: "1em" }}>
        <p>Select A Property:</p>
        <Select options={properties} onChange={setSelectedProperty} />

        {property ? <ChartComponent property={property} /> : null}
      </div>
    </div>
  );
};

export default Dashboard;

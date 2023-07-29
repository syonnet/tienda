import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const HomeScreen = () => {
  const productos = [
    { id: 1, nombre: 'Camisetas', precio: '$20', imagen: require('../assets/Image/home/c1.png') },
    { id: 2, nombre: 'Pantalone', precio: '$30', imagen: require('../assets/Image/home/p1.png') },
    { id: 3, nombre: 'Bolsos', precio: '$50', imagen: require('../assets/Image/home/b1.png') },
    { id: 4, nombre: 'Collares', precio: '$50', imagen: require('../assets/Image/home/cl1.png') },
    { id: 5, nombre: 'Faldas', precio: '$50', imagen: require('../assets/Image/home/f1.png') },
    { id: 6, nombre: 'Gorras', precio: '$50', imagen: require('../assets/Image/home/g1.png') },
    
  ];

  const renderProducto = ({ item }) => (
    <View style={styles.productoContainer}>
      <View style={styles.imagenContainer}>
        <Image source={item.imagen} style={styles.imagen} />
      </View>
      <Text style={styles.nombreProducto}>{item.nombre}</Text>
      <Text style={styles.precioProducto}>{item.precio}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Productos Destacados</Text>
      <Text style={styles.titulo}>De este mes</Text>
      <FlatList
        data={productos}
        renderItem={renderProducto}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productoContainer: {
    flex: 0.5, // Mostrar dos elementos por fila
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    margin: 8,
  },
  imagenContainer: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  imagen: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  nombreProducto: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  precioProducto: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;

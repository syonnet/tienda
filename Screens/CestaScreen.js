import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import cartData from 'tienda/assets/data/carrito.json';
import Icon from 'react-native-vector-icons/Ionicons';

const CestaScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imagen }} style={styles.imagenProducto} />
      <View style={styles.infoContainer}>
        <Text style={styles.nombreProducto}>{item.nombre}</Text>
        <Text style={styles.descripcionProducto}>{item.descripcion}</Text>
        <Text style={styles.precioProducto}>Precio: ${item.precio}</Text>
        <Text style={styles.detalleProducto}>Color: {item.color}, Talla: {item.talla}</Text>
        <Text style={styles.detalleProducto}>Cantidad: {item.cantidad}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tus Pedidos</Text>
      <FlatList
        data={cartData.productos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.confirmarButton} onPress={() => alert('Venta confirmada')}>
          <Icon name="checkmark-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>Confirmar Venta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelarButton} onPress={() => alert('Venta cancelada')}>
          <Icon name="close-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  imagenProducto: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
  },
  nombreProducto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descripcionProducto: {
    fontSize: 14,
    color: '#666',
  },
  precioProducto: {
    fontSize: 16,
  },
  detalleProducto: {
    fontSize: 14,
    color: '#888',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 16,
  },
  confirmarButton: {
    flexDirection: 'row',
    backgroundColor: '#4caf50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelarButton: {
    flexDirection: 'row',
    backgroundColor: '#f44336',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
});

export default CestaScreen;

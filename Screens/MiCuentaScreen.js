import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MiCuentaScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={{ uri: 'https://picsum.photos/800/1200' }} style={styles.backgroundImage}>
        <View style={styles.contentContainer}>
          <View style={styles.avatarContainer}>
            <Icon name="person-circle-outline" size={80} color="#666" />
            <Text style={styles.usuarioTexto}>Nombre de Usuario</Text>
          </View>
          <Text style={styles.seccionTitulo}>Lista de Deseos</Text>
          <View style={styles.seccionContainer}>
            <TouchableOpacity style={styles.opcionContainer} onPress={() => alert('Lista de Deseos')}>
              <Icon name="heart-outline" size={24} color="#fff" />
              <Text style={styles.opcionTexto}>Guardados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opcionContainer} onPress={() => alert('Siguiendo')}>
              <Icon name="person-add-outline" size={24} color="#fff" />
              <Text style={styles.opcionTexto}>Siguiendo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opcionContainer} onPress={() => alert('Historial')}>
              <Icon name="time-outline" size={24} color="#fff" />
              <Text style={styles.opcionTexto}>Historial</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opcionContainer} onPress={() => alert('Cupones')}>
              <Icon name="pricetag-outline" size={24} color="#fff" />
              <Text style={styles.opcionTexto}>Cupones</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.seccionTitulo}>Tus Compras</Text>
          <View style={styles.seccionContainer}>
          <TouchableOpacity style={styles.opcionContainer} onPress={() => alert('Pedidos')}>
            <Icon name="receipt-outline" size={24} color="#fff" />
            <Text style={styles.opcionTexto}>Pedidos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcionContainer} onPress={() => alert('Enviado')}>
            <Icon name="checkbox-outline" size={24} color="#fff" />
            <Text style={styles.opcionTexto}>Enviado</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcionContainer} onPress={() => alert('Pagar')}>
            <Icon name="card-outline" size={24} color="#fff" />
            <Text style={styles.opcionTexto}>Pagar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcionContainer} onPress={() => alert('Calificación')}>
            <Icon name="star-outline" size={24} color="#fff" />
            <Text style={styles.opcionTexto}>Calificación</Text>
          </TouchableOpacity>
          </View>
          <Text style={styles.seccionTitulo}>Ofertas</Text>
          <View style={styles.promocionContainer}>
            <Image source={{ uri: 'https://picsum.photos/400/200' }} style={styles.promocionImagen} />
          </View>
          <Text style={styles.seccionTitulo}>Favoritos</Text>
          <View style={styles.seccionContainer}>
          <TouchableOpacity style={styles.opcionContainer} onPress={() => alert('Favoritos')}>
            <Icon name="bookmark-outline" size={24} color="#fff" />
            <Text style={styles.opcionTexto}>Favoritos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcionContainer} onPress={() => alert('Ropa')}>
            <Icon name="shirt-outline" size={24} color="#fff" />
            <Text style={styles.opcionTexto}>Ropa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcionContainer} onPress={() => alert('Zapatos')}>
            <Icon name="barbell-outline" size={24} color="#fff" />
            <Text style={styles.opcionTexto}>Zapatos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcionContainer} onPress={() => alert('Accesorios')}>
            <Icon name="car" size={24} color="#fff" />
            <Text style={styles.opcionTexto}>Accesorios</Text>
          </TouchableOpacity>
          </View>
          <Text style={styles.finalTexto}>Gracias por usar nuestra APP</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fondo semi-transparente
  },
  backgroundImage: {
    flex: 1,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  usuarioTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  seccionTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  seccionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 12,
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 8,
  },
  opcionContainer: {
    alignItems: 'center',
  },
  opcionTexto: {
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
  },
  promocionContainer: {
    alignItems: 'center',
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  promocionImagen: {
    width: '100%',
    height: '100%',
  },
  finalTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 24,
  },
});

export default MiCuentaScreen;

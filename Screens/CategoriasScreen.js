import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

const categorias = [
  {
    id: 1,
    nombre: "Hombres",
    imagen1: {
      uri: "https://picsum.photos/200/300",
      descripcion: "Pantalones",
    },
    imagen2: {
      uri: "https://picsum.photos/200/301",
      descripcion: "Chaquetas",
    },
  },
  {
    id: 2,
    nombre: "Mujeres",
    imagen1: {
      uri: "https://picsum.photos/200/302",
      descripcion: "Vestidos Casuales",
    },
    imagen2: {
      uri: "https://picsum.photos/200/303",
      descripcion: "Lenceria",
    },
  },
  {
    id: 3,
    nombre: "Ninos",
    imagen1: {
      uri: "https://picsum.photos/200/304",
      descripcion: "Conjuntos",
    },
    imagen2: {
      uri: "https://picsum.photos/200/305",
      descripcion: "Ropa de Bebe",
    },
  },
  {
    id: 4,
    nombre: "Otaku",
    imagen1: {
      uri: "https://picsum.photos/200/306",
      descripcion: "KpoP",
    },
    imagen2: {
      uri: "https://picsum.photos/200/307",
      descripcion: "Cosplay",
    },
  },
];

const CategoriasScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Categorías</Text>
      <ScrollView contentContainerStyle={styles.categoriasContainer}>
        {categorias.map((categoria) => (
          <View key={categoria.id} style={styles.categoria}>
            <Text style={styles.categoriaNombre}>{categoria.nombre}</Text>
            <View style={styles.imagenContainer}>
              <View style={styles.imagenItem}>
                <Image style={styles.imagen} source={categoria.imagen1} />
                <Text style={styles.imagenDescripcion}>
                  {categoria.imagen1.descripcion}
                </Text>
              </View>
              <View style={styles.imagenItem}>
                <Image style={styles.imagen} source={categoria.imagen2} />
                <Text style={styles.imagenDescripcion}>
                  {categoria.imagen2.descripcion}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  categoriasContainer: {
    paddingBottom: 20,
  },
  categoria: {
    marginBottom: 20,
  },
  categoriaNombre: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  imagenContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imagenItem: {
    alignItems: "center",
  },
  imagen: {
    width: 150,
    height: 200,
    borderRadius: 8,
  },
  imagenDescripcion: {
    marginTop: 8,
    textAlign: "center",
  },
});

export default CategoriasScreen;

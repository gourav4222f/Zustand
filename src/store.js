import { create } from 'zustand';

export const useProductStore = create((set) => ({
    productStates: {},
    setProductImage: (productId, Image) => set((state) => ({
        productStates: {
            ...state.productStates,
            [productId]: { ...state.productStates[productId], currentImage: Image }
        }
    })),
    setProductHover: (productId, hover) => set((state) => ({
        productStates: {
            ...state.productStates,
            [productId]: { ...state.productStates[productId], hover }
        }
    })),
    initializeProduct: (productId, initialImage) => set((state) => ({
        productStates: {
            ...state.productStates,
            [productId]: { currentImage: initialImage, hover: false }
        }
    })),

}))


export const useFilterStore = create((set) => ({
    selectedColors: [],
    selectedContries: [],
    selectedPriceRange: null,

    setSelectedContries: (Contries) => set({ selectedContries: Contries }),
    setSelectedColors: (Colors) => set({ selectedColors: Colors }),
    setSelectedPriceRange: (Range) => set({ selectedPriceRange: Range }),
    clearFilters: () => set({
        selectedColors: [],
        selectedContries: [],
        selectedPriceRange: null,
    })
}))


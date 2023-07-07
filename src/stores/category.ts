import { defineStore } from 'pinia';
import { type CategoryItem } from '../types';
import { apiUrl } from '../api';

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categoryList: [] as CategoryItem[],
    }),
    actions: {
        async fetchCategories() {
            try {
                const response = await fetch(apiUrl + "/categories/");
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json();
                this.categoryList = data as CategoryItem[];;
            } catch (error) {
                console.error(error);
            }
        },
    },
});

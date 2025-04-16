import { prop, sumBy } from 'remeda'
import { calculateAccuracy } from '~/composables/tools/accuracy-calculator'

export const useToolsAccuracyCalculatorStore = defineStore('tools.accuracy-calculatorStore', {
	state: (): {
		readonly editor: {
			readonly name: string

			readonly maps: {
				readonly title: string
				readonly notes: number
			}[]

			readonly require_accuracy: number
		}

		readonly precision: number
		readonly inputs: number[]
	} => ({
		editor: {
			name: '',
			maps: [],
			require_accuracy: 100
		},
		precision: 2,
		inputs: []
	}),
	getters: {
		editorMapTotalNotes(store) {
			return sumBy(store.editor.maps, prop('notes'))
		},
		calculateResults(store) {
			return calculateAccuracy(
				store.editor.maps.map((map, index) => {
					return {
						notes: map.notes,
						accuracy: store.inputs[index] ?? null
					}
				})
			)
		},
		isPassed(store) {
			if (this.calculateResults.length !== store.editor.maps.length) {
				return false
			}

			return store.inputs[store.inputs.length - 1] >= store.editor.require_accuracy
		}
	}
})
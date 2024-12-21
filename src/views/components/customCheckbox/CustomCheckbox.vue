<template>
  <div class="container-checkbox">
    <label
      v-for="(option, index) in options"
      :key="index"
      class="checkbox-custom"
    >
      <input
        type="checkbox"
        :value="option.value"
        v-model="selectedOptions"
        @change="handleChange(option.value)"
      />
      <span class="checkmark"></span>
      <span
        class="label-text"
        :class="{ 'label-checked-box': selectedOptions.includes(option.value) }"
      >
        {{ option.label }}
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "CustomCheckbox",
  props: {
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedOptions: [...this.modelValue],
    };
  },
  watch: {
    selectedOptions(newVal) {
      this.$emit("update:modelValue", newVal);
    },
  },
  methods: {
    handleChange(value) {
      this.$emit("checkbox-changed", value);
    },
  },
};
</script>

<style>
.container-checkbox {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.checkbox-custom {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox-custom input[type="checkbox"] {
  display: none;
}

.checkbox-custom .checkmark {
  width: 24px;
  height: 24px;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, border-color 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.checkbox-custom input[type="checkbox"]:checked + .checkmark {
  background-color: #00AEEF;
  border-color: #00AEEF;
}

.checkbox-custom input[type="checkbox"]:checked + .checkmark::after {
  content: "✔";
  color: #fff;
  font-size: 14px;
}

.label-text {
  font-size: 19px;
  font-weight: 400;
  color: #333F52;
}

.label-checked-box {
  font-weight: 700;
}
</style>

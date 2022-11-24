<template>
	<div>foo: {{ $route.query.foo }}</div>
</template>

<script>
export default {
	props: {
		foo: {},
	},
	watch: {
		'$route.query': {
			immediate: true,
			handler() {
				console.log(this.$route.query)
			}
		}
	}
}
</script>

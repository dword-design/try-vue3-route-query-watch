<template>
	<div>
		<comp v-if="!!$route.query.foo" />
		<button @click="$router.replace({ query: { foo: $route.query.foo ? undefined : 'bar' } })">Switch</button>
	</div>
</template>

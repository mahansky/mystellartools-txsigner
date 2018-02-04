<template>
    <div>
        <table>
            <tr>
                <td><b>Key</b></td>
                <td><span v-text="operation.name"></span></td>
            </tr>
            <tr>
                <td><b>Value</b></td>
                <td><span v-text="operation.value"></span></td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    props: ['operation']
  }
</script>
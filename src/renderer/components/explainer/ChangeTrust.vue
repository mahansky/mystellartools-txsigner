<template>
    <div>
        <table>
            <tr>
                <td><b>Asset</b></td>
                <td>
                    <span v-text="operation.line.code"></span>
                </td>
            </tr>
            <tr>
                <td><b>Issuer</b></td>
                <td><span v-text="operation.line.issuer"></span></td>
            </tr>
            <tr v-if="operation.limit">
                <td><b>Limit</b></td>
                <td><span v-text="operation.limit"></span></td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    props: ['operation']
  }
</script>
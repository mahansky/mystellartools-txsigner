<template>
    <div>
        <table>
            <tr>
                <td><b>Trustor</b></td>
                <td><span v-text="operation.trustor"></span></td>
            </tr>
            <tr>
                <td><b>Asset</b></td>
                <td><span v-text="operation.assetCode"></span></td>
            </tr>
            <tr>
                <td><b>Authorize</b></td>
                <td><span v-text="operation.authorize.toString().toUpperCase()"></span></td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    props: ['operation']
  }
</script>
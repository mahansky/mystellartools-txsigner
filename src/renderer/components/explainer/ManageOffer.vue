<template>
    <div>
        <table>
            <tr>
                <td><b>Offer ID</b></td>
                <td><span v-text="operation.offerId"></span></td>
            </tr>
            <tr><td colspan="2">&nbsp;</td></tr>
            <tr>
                <td><b>Selling</b></td>
                <td>
                    <span v-text="operation.amount"></span>
                    <span v-if="operation.selling.issuer === null">XLM</span>
                    <span v-else v-text="operation.selling.code"></span>
                </td>
            </tr>
            <tr v-if="operation.selling.issuer">
                <td><b>Asset Issuer</b></td>
                <td><span v-text="operation.selling.issuer"></span></td>
            </tr>
            <tr><td colspan="2">&nbsp;</td></tr>
            <tr>
                <td><b>Buying</b></td>
                <td>
                    <span v-if="operation.buying.issuer === null">XLM</span>
                    <span v-else v-text="operation.buying.code"></span>
                </td>
            </tr>
            <tr v-if="operation.buying.issuer">
                <td><b>Asset Issuer</b></td>
                <td><span v-text="operation.buying.issuer"></span></td>
            </tr>
            <tr><td colspan="2">&nbsp;</td></tr>
            <tr>
                <td><b>Price</b></td>
                <td><span v-text="operation.price"></span></td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    props: ['operation']
  }
</script>
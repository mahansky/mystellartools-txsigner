<template>
    <div>
        <table>
            <tr>
                <td><b>Send max</b></td>
                <td>
                    <span v-text="operation.sendMax"></span>
                    <span v-if="operation.sendAsset === null">XLM</span>
                    <span v-else v-text="operation.sendAsset.code"></span>
                </td>
            </tr>
            <tr v-if="operation.sendAsset.issuer">
                <td><b>Asset Issuer</b></td>
                <td><span v-text="operation.sendAsset.issuer"></span></td>
            </tr>
            <tr><td colspan="2">&nbsp;</td></tr>
            <tr>
                <td><b>Destination</b></td>
                <td><span v-text="operation.destination"></span></td>
            </tr>
            <tr>
                <td><b>Amount received</b></td>
                <td>
                    <span v-text="operation.destAmount"></span>
                    <span v-if="operation.destAsset.issuer === null">XLM</span>
                    <span v-else v-text="operation.destAsset.code"></span>
                </td>
            </tr>
            <tr v-if="operation.destAsset.issuer">
                <td><b>Asset Issuer</b></td>
                <td><span v-text="operation.destAsset.issuer"></span></td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    props: ['operation']
  }
</script>
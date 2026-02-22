#!/bin/bash

echo "🔍 AUDIT TRADUCTIONS i18n - DreamNova"
echo "======================================"
echo ""

check_page() {
    local file=$1
    local name=$(echo $file | sed 's|src/app/||' | sed 's|/page.tsx||')

    # Check if file uses useTranslation
    has_import=$(grep -c "useTranslation.*LanguageContext" "$file" 2>/dev/null || echo "0")
    has_hook=$(grep -c "const.*{.*t.*}.*=.*useTranslation()" "$file" 2>/dev/null || echo "0")

    # Count hardcoded strings (rough heuristic - strings in JSX)
    # Look for patterns like >Text< or "text" in JSX, excluding imports/comments
    hardcoded=$(grep -v "^import\|^//\|^\s*//" "$file" | \
                grep -oE '(>[A-Z][a-zA-Z ]+<|"[A-Z][a-zA-Z ]+")' | \
                grep -v "ClassName\|Component\|Provider" | \
                wc -l | tr -d ' ')

    if [ "$has_import" -gt 0 ] && [ "$has_hook" -gt 0 ]; then
        if [ "$hardcoded" -lt 5 ]; then
            echo "✅ $name - TRADUIT (hardcoded: $hardcoded)"
        else
            echo "🟡 $name - PARTIEL (hardcoded: $hardcoded)"
        fi
    else
        echo "❌ $name - PAS TRADUIT"
    fi
}

echo "📱 MARKETING:"
check_page "src/app/(marketing)/page.tsx"
check_page "src/app/(marketing)/about/page.tsx"
check_page "src/app/(marketing)/nova-key/page.tsx"
check_page "src/app/(marketing)/contact/page.tsx"
check_page "src/app/(marketing)/source-code/page.tsx"
check_page "src/app/(marketing)/covenant-pack/page.tsx"

echo ""
echo "🛒 SHOP:"
check_page "src/app/(shop)/checkout/page.tsx"
check_page "src/app/(shop)/accessories/page.tsx"
check_page "src/app/(shop)/success/page.tsx"

echo ""
echo "🔐 AUTH:"
check_page "src/app/(auth)/login/page.tsx"
check_page "src/app/(auth)/register/page.tsx"

echo ""
echo "🚪 PORTAL:"
check_page "src/app/(portal)/unlock/page.tsx"
check_page "src/app/(portal)/tikkun/page.tsx"
check_page "src/app/(portal)/azamra/page.tsx"

echo ""
echo "📊 DASHBOARD:"
check_page "src/app/(dashboard)/overview/page.tsx"
check_page "src/app/(dashboard)/orders/page.tsx"
check_page "src/app/(dashboard)/nfc/page.tsx"
check_page "src/app/(dashboard)/hafatsa/page.tsx"
check_page "src/app/(dashboard)/settings/page.tsx"

echo ""
echo "📄 LEGAL:"
check_page "src/app/(marketing)/terms/page.tsx"
check_page "src/app/(marketing)/privacy/page.tsx"
check_page "src/app/(marketing)/refund/page.tsx"
